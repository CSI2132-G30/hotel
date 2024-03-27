import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { router } from "./routes/hotels";
import { pool } from "./database";

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
	CHAIN SMALLINT REFERENCES CHAIN(id),
	stars SMALLINT,
	num_rooms SMALLINT,
	address TEXT,
	manager SMALLINT REFERENCES employee(ssn)
)`);

	// This creates the room table
	await pool.query(`CREATE TABLE IF NOT EXISTS room (
	id SERIAL PRIMARY KEY,
	hotel SMALLINT REFERENCES hotel(id),
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

	// // Used this to test chain fetching, you can toss into your chains.sql or wherever
	// await pool.query(`INSERT INTO CHAIN  (
	// 	name,
	// 	num_hotels,
	// 	hq_address,
	// 	email,
	// 	phone_num
	// )
	// VALUES
	// ('Chain1', 123, '123 A St.', 'chain@A.com', '123-456-7890'),
	// ('Chain2', 123, '123 B St.', 'chain@B.com', '123-456-7890'),
	// ('Chain3', 123, '123 C St.', 'chain@C.com', '123-456-7890'),
	// ('Chain4', 123, '123 D St.', 'chain@D.com', '123-456-7890'),
	// ('Chain5', 123, '123 E St.', 'chain@E.com', '123-456-7890')`);
})();

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/hotels", router);
app.listen(4040, () => console.log("app listening on port 4040"));
