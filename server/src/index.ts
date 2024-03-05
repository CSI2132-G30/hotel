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
}

// This creates the customer table
pool.query(`CREATE TABLE IF NOT EXISTS customer (
	ssn SMALLINT PRIMARY KEY ,
	name TEXT,
	username TEXT,
	password TEXT
)`);

pool.query(`CREATE TABLE IF NOT EXISTS employee (
	ssn SMALLINT PRIMARY KEY,
	name TEXT,
	username TEXT,
	password TEXT
)`);

// This creates the chain table
pool.query(`CREATE TABLE IF NOT EXISTS CHAIN (
	name TEXT PRIMARY KEY,
	num_hotels SMALLINT,
	hq_address TEXT,
	email TEXT,
	phone_num TEXT
)`);

// This creates the hotel table
pool.query(`CREATE TABLE IF NOT EXISTS hotel (
	id SMALLINT PRIMARY KEY,
	name TEXT,
	CHAIN TEXT REFERENCES CHAIN(name),
	stars SMALLINT,
	num_rooms SMALLINT,
	address TEXT,
	manager SMALLINT REFERENCES employee(ssn)
)`);

// This creates the room table
pool.query(`CREATE TABLE IF NOT EXISTS room (
	id SMALLINT PRIMARY KEY,
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
pool.query(`CREATE TABLE IF NOT EXISTS booking (
	room_id SMALLINT REFERENCES room(id),
	customer_id SMALLINT REFERENCES customer(ssn),
	start_date DATE,
	end_date DATE,
	checked_in BOOLEAN,
	PRIMARY KEY (room_id, customer_id, start_date)
)`);

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/hotels", router);
app.listen(4040, () => console.log("app listening on port 4040"));
