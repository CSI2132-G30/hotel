import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { router } from "./routes/hotels";
import { pool } from "./database";

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
	id SMALLINT PRIMARY KEY,
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
	stars DOUBLE,
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
	amenities TEXT[],
	extendible BOOLEAN,
	damage BOOLEAN
)`);

	// This creates the booking table
	await pool.query(`CREATE TABLE IF NOT EXISTS booking (
	room_id SMALLINT REFERENCES room(id) ON UPDATE CASCADE ON DELETE CASCADE,
	customer_id TEXT REFERENCES customer(ssn) ON UPDATE CASCADE ON DELETE CASCADE,
	start_date DATE,
	end_date DATE,
	checked_in BOOLEAN,
	PRIMARY KEY (room_id, customer_id, start_date)
)`);

})();

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/hotels", router);
app.listen(4040, () => console.log("app listening on port 4040"));