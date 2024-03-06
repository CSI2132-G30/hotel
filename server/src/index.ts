import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { router } from "./routes/hotels";
import { pool } from "./database";

declare global {
	export type Hotel = {
		id: number;
		name: string;
		chain: string;
		stars: number;
		num_rooms: number;
		address: string;
		manager: number;
	};

	export type Booking = {
		room_id: number;
		customer_id: number;
		start_date: Date;
		end_date: Date;
		checked_in: boolean;
	};

	export type User = {
		ssn: number;
		name: string;
		username: string;
		password: string;
	};
}

(async () => {
	// This creates the customer table
	await pool.query(`CREATE TABLE IF NOT EXISTS customer (
	ssn SMALLINT PRIMARY KEY ,
	name TEXT,
	username TEXT,
	password TEXT
)`);

	await pool.query(`CREATE TABLE IF NOT EXISTS employee (
	ssn SMALLINT PRIMARY KEY,
	name TEXT,
	username TEXT,
	password TEXT
)`);

	// This creates the chain table
	await pool.query(`CREATE TABLE IF NOT EXISTS CHAIN (
	name TEXT PRIMARY KEY,
	num_hotels SMALLINT,
	hq_address TEXT,
	email TEXT,
	phone_num TEXT
)`);

	// This creates the hotel table
	await pool.query(`CREATE TABLE IF NOT EXISTS hotel (
	id SERIAL PRIMARY KEY,
	name TEXT,
	CHAIN TEXT REFERENCES CHAIN(name),
	stars SMALLINT,
	num_rooms SMALLINT,
	address TEXT,
	manager SMALLINT REFERENCES employee(ssn)
)`);

	// This creates the room table
	await pool.query(`CREATE TABLE IF NOT EXISTS room (
	id SERIAL PRIMARY KEY,
	hotel TEXT REFERENCES hotel(name),
	number INTEGER,
	price FLOAT,
	capacity INTEGER,
	view TEXT,
	amenities TEXT[],
	extendible BOOLEAN,
	damage BOOLEAN
)`);

	// This creates the booking table
	await pool.query(`CREATE TABLE IF NOT EXISTS booking (
	room_id SMALLINT REFERENCES room(id),
	customer_id SMALLINT REFERENCES customer(ssn),
	start_date DATE,
	end_date DATE,
	checked_in BOOLEAN,
	PRIMARY KEY (room_id, customer_id, start_date)
)`);
	await pool.query(`INSERT INTO customer (ssn, name, username, password)
VALUES
(101, 'Alice Johnson', 'alice', 'pass123'),
(102, 'Bob Smith', 'bob', 'pass456')`);

	await pool.query(`INSERT INTO employee (ssn, name, username, password)
VALUES
(1, 'John Doe', 'johndoe', 'password123'),
(2, 'Jane Smith', 'janesmith', 'abc123')`);

	await pool.query(`INSERT INTO CHAIN  (
	name,
	num_hotels,
	hq_address,
	email,
	phone_num
)
VALUES
('Chain1', 123, '123 A St.', 'chain@A.com', '123-456-7890'),
('Chain2', 123, '123 B St.', 'chain@B.com', '123-456-7890'),
('Chain3', 123, '123 C St.', 'chain@C.com', '123-456-7890'),
('Chain4', 123, '123 D St.', 'chain@D.com', '123-456-7890'),
('Chain5', 123, '123 E St.', 'chain@E.com', '123-456-7890')`);

	await pool.query(`INSERT INTO hotel (
	name,
	CHAIN,
	stars,
	num_rooms,
	address,
	manager
)
VALUES
('Hotel1', 'Chain1', 4, 50, 'Address 1', 1),
('Hotel2', 'Chain1', 3, 60, 'Address 2', 2),
('Hotel3', 'Chain1', 5, 70, 'Address 3', 1),
('Hotel4', 'Chain1', 4, 80, 'Address 4', 2),
('Hotel5', 'Chain2', 4, 55, 'Address 5', 1),
('Hotel6', 'Chain2', 3, 65, 'Address 6', 2),
('Hotel7', 'Chain2', 5, 75, 'Address 7', 1),
('Hotel8', 'Chain2', 4, 85, 'Address 8', 2),
('Hotel9', 'Chain3', 4, 58, 'Address 9', 1),
('Hotel10', 'Chain3', 3, 68, 'Address 10', 2),
('Hotel11', 'Chain3', 5, 78, 'Address 11', 1),
('Hotel12', 'Chain3', 4, 88, 'Address 12', 2),
('Hotel13', 'Chain4', 4, 56, 'Address 13', 1),
('Hotel14', 'Chain4', 3, 66, 'Address 14', 2),
('Hotel15', 'Chain4', 5, 76, 'Address 15', 1),
('Hotel16', 'Chain4', 4, 86, 'Address 16', 2),
('Hotel17', 'Chain5', 4, 59, 'Address 17', 1),
('Hotel18', 'Chain5', 3, 69, 'Address 18', 2),
('Hotel19', 'Chain5', 5, 79, 'Address 19', 1),
('Hotel20', 'Chain5', 4, 89, 'Address 20', 2),
('Hotel1A', 'Chain1', 4, 50, 'Address 1', 1),
('Hotel2A', 'Chain1', 3, 60, 'Address 2', 2),
('Hotel3A', 'Chain1', 5, 70, 'Address 3', 1),
('Hotel4A', 'Chain1', 4, 80, 'Address 4', 2),
('Hotel5A', 'Chain2', 4, 55, 'Address 5', 1),
('Hotel6A', 'Chain2', 3, 65, 'Address 6', 2),
('Hotel7A', 'Chain2', 5, 75, 'Address 7', 1),
('Hotel8A', 'Chain2', 4, 85, 'Address 8', 2),
('Hotel9A', 'Chain3', 4, 58, 'Address 9', 1),
('Hotel10A', 'Chain3', 3, 68, 'Address 10', 2),
('Hotel11A', 'Chain3', 5, 78, 'Address 11', 1),
('Hotel12A', 'Chain3', 4, 88, 'Address 12', 2),
('Hotel13A', 'Chain4', 4, 56, 'Address 13', 1),
('Hotel14A', 'Chain4', 3, 66, 'Address 14', 2),
('Hotel15A', 'Chain4', 5, 76, 'Address 15', 1),
('Hotel16A', 'Chain4', 4, 86, 'Address 16', 2),
('Hotel17A', 'Chain5', 4, 59, 'Address 17', 1),
('Hotel18A', 'Chain5', 3, 69, 'Address 18', 2),
('Hotel19A', 'Chain5', 5, 79, 'Address 19', 1),
('Hotel20A', 'Chain5', 4, 89, 'Address 20', 2)
`);

	await pool.query(`INSERT INTO room (id, hotel, number, price, capacity, view, amenities, extendible, damage)
VALUES
('Hotel1', 101, 100, 2, 'City View', ARRAY['WiFi', 'TV'], TRUE, FALSE),
('Hotel2', 102, 150, 4, 'Ocean View', ARRAY['WiFi', 'TV', 'Mini Bar'], TRUE, FALSE),
('Hotel3', 103, 200, 6, 'Mountain View', ARRAY['WiFi', 'TV', 'Jacuzzi'], TRUE, FALSE),
('Hotel4', 104, 120, 3, 'City View', ARRAY['WiFi', 'TV'], TRUE, FALSE),
('Hotel5', 105, 90, 2, 'City View', ARRAY['WiFi', 'TV'], TRUE, FALSE)`);
})();

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/hotels", router);
app.listen(4040, () => console.log("app listening on port 4040"));
