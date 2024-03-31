import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { router } from "./routes/hotels";
import { pool } from "./database";
import { userRouter } from "./routes/users";

(async () => {
	// This creates the customer table
	await pool.query(`CREATE TABLE IF NOT EXISTS customer (
	ssn TEXT PRIMARY KEY ,
	name TEXT,
	username TEXT,
	password TEXT
)`);

	await pool.query(`CREATE TABLE IF NOT EXISTS employee (
	ssn TEXT PRIMARY KEY,
	name TEXT,
	username TEXT,
	password TEXT
)`);

	// This creates the chain table
	await pool.query(`CREATE TABLE IF NOT EXISTS CHAIN (
	id SERIAL PRIMARY KEY,
	name TEXT,
	num_hotels SMALLINT,
	hq_address TEXT,
	email TEXT,
	phone_num TEXT
)`);

	// This creates the hotel table
	await pool.query(`CREATE TABLE IF NOT EXISTS hotel (
	id SERIAL PRIMARY KEY,
	name TEXT,
	CHAIN SMALLINT REFERENCES CHAIN(id) ON UPDATE CASCADE ON DELETE CASCADE,
	stars DOUBLE PRECISION NOT NULL,
	city TEXT,
	num_rooms SMALLINT,
	address TEXT,
	manager TEXT REFERENCES employee(ssn) ON UPDATE CASCADE ON DELETE CASCADE
)`);

	// This creates the room table
	await pool.query(`CREATE TABLE IF NOT EXISTS room (
	id SERIAL PRIMARY KEY,
	hotel SMALLINT REFERENCES hotel(id) ON UPDATE CASCADE ON DELETE CASCADE,
	number INTEGER,
	price FLOAT,
	capacity INTEGER,
	view TEXT,
	amenities TEXT,
	extendible BOOLEAN,
	damage BOOLEAN
)`);

	// This creates the booking table
	await pool.query(`CREATE TABLE IF NOT EXISTS booking (
	room_id SMALLINT REFERENCES room(id) ON UPDATE CASCADE ON DELETE CASCADE,
	customer_id TEXT REFERENCES customer(ssn) ON UPDATE CASCADE ON DELETE CASCADE,
	start_date DATE NOT NULL,
	end_date DATE NOT NULL,
	checked_in BOOLEAN,
	PRIMARY KEY (room_id, customer_id, start_date)
)`);

	// Addition of indices
	await pool.query(`CREATE INDEX IF NOT EXISTS hotel_city ON hotel(city)`);

	await pool.query(
		`CREATE INDEX IF NOT EXISTS employee_username ON employee(username)`
	);
	await pool.query(
		`CREATE INDEX IF NOT EXISTS employee_password ON employee(password)`
	);
	await pool.query(
		`CREATE INDEX IF NOT EXISTS customer_username ON customer(username)`
	);
	await pool.query(
		`CREATE INDEX IF NOT EXISTS customer_password ON customer(password)`
	);

	await pool.query(
		`CREATE INDEX IF NOT EXISTS booking_start ON booking(start_date DESC)`
	);

	await pool.query(
		`CREATE INDEX IF NOT EXISTS booking_end ON booking(end_date DESC)`
	);

	// This creates the view that aggregates 
	await pool.query(`
	CREATE OR REPLACE VIEW available_rooms_per_city AS
	SELECT city, COUNT(*) AS num_available_rooms
	FROM hotel
	LEFT JOIN room ON hotel.id = room.hotel
	GROUP BY city
`);

	// This creates the view that aggregates the capacity of all rooms in a specific hotel
	await pool.query(`
	CREATE OR REPLACE VIEW aggregated_capacity_per_hotel AS
	SELECT hotel.id, SUM(room.capacity) AS total_capacity
	FROM hotel
	JOIN room ON hotel.id = room.hotel
	GROUP BY hotel.id
`);

	// function for hotel count the trigger
	await pool.query(`CREATE OR REPLACE FUNCTION update_hotel_count() RETURNS TRIGGER AS $$
	BEGIN
	IF (TG_OP = 'INSERT') THEN
		UPDATE chain SET num_hotels = chain.num_hotels+1 WHERE chain.id = NEW.chain;
	END IF;
	IF (TG_OP = 'DELETE') THEN
		UPDATE chain SET num_hotels = chain.num_hotels-1 WHERE chain.id = NEW.chain;
	END IF;
	RETURN NEW;
	END;
	$$ LANGUAGE plpgsql;`);

	//hotel count trigger
	await pool.query(`CREATE OR REPLACE TRIGGER hotel_count
    AFTER INSERT OR DELETE ON HOTEL
    FOR EACH ROW
    EXECUTE FUNCTION update_hotel_count();`);

	// function for the room count trigger
	await pool.query(`CREATE OR REPLACE FUNCTION update_room_count() RETURNS TRIGGER AS $$
	BEGIN	
	IF (TG_OP = 'INSERT') THEN	
		UPDATE hotel SET num_rooms = hotel.num_rooms+1 WHERE hotel.id = NEW.hotel;
	END IF;
	IF (TG_OP = 'DELETE') THEN
		UPDATE hotel SET num_rooms = hotel.num_rooms-1 WHERE hotel.id = NEW.hotel;
	END IF;
	RETURN NEW;
	END;
	$$ LANGUAGE plpgsql;`);
	
	// room count trigger
	await pool.query (`CREATE OR REPLACE TRIGGER room_count
    AFTER INSERT OR DELETE ON ROOM
    FOR EACH ROW
    EXECUTE FUNCTION update_room_count();`);

	// function for the star verification trigger
	await pool.query (`CREATE OR REPLACE FUNCTION verify_hotel() RETURNS TRIGGER AS $$
	BEGIN
		IF NEW.stars > 5 OR NEW.stars < 0 THEN
			RAISE EXCEPTION 'Stars must be between 0 and 5. % has %.', NEW.name, NEW.stars;
		END IF;
		IF NEW.num_rooms < 0 THEN
			RAISE EXCEPTION '% has % rooms.', NEW.name, NEW.num_rooms;
		END IF;
		RETURN NEW;
	END;
    $$ LANGUAGE plpgsql;`);

	// star verification trigger
	await pool.query (`CREATE OR REPLACE TRIGGER verify_hotel
    BEFORE INSERT OR UPDATE ON HOTEL
    FOR EACH ROW
    EXECUTE FUNCTION verify_hotel();`);

	// function for the booking verification trigger
	await pool.query (`CREATE OR REPLACE FUNCTION verify_booking() RETURNS TRIGGER AS $$
	BEGIN
		IF NEW.start_date > NEW.end_date THEN
			RAISE EXCEPTION 'A booking starts after it ends.';
		END IF;
		IF NEW.start_date BETWEEN (SELECT start_date FROM booking WHERE NEW.room_id = room_id) AND (SELECT end_date FROM booking WHERE NEW.room_id = room_id) THEN
			RAISE EXCEPTION 'Room % is booked twice at the same time', NEW.room_id;
		END IF;
		IF NEW.end_date BETWEEN (SELECT start_date FROM booking WHERE NEW.room_id = room_id) AND (SELECT end_date FROM booking WHERE NEW.room_id = room_id) THEN
			RAISE EXCEPTION 'Room % is booked twice at the same time', NEW.room_id;
		END IF;
		RETURN NEW;
	END;
	$$ LANGUAGE plpgsql;`);

	// booking verification trigger
	await pool.query (`CREATE OR REPLACE TRIGGER verify_booking
	BEFORE INSERT OR UPDATE ON BOOKING
	FOR EACH ROW
	EXECUTE FUNCTION verify_booking();`);

	// function for the room verification trigger
	await pool.query (`CREATE OR REPLACE FUNCTION verify_room() RETURNS TRIGGER AS $$
	BEGIN
		IF NEW.capacity < 1 THEN
			RAISE EXCEPTION 'Room % in hotel % has a capacity less than 1.', NEW.room_id, NEW.hotel;
		END IF;
		RETURN NEW;
	END;
	$$ LANGUAGE plpgsql;`);

	// room verification trigger
	await pool.query (`CREATE OR REPLACE TRIGGER verify_room
	BEFORE INSERT OR UPDATE ON ROOM
	FOR EACH ROW
	EXECUTE FUNCTION verify_room();`);

})();

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/hotels", router);
app.use("/users", userRouter);
app.listen(4040, () => console.log("app listening on port 4040"));
