import express from "express";
import { pool } from "../database";

const router = express.Router();

// This creates the employee table
// to do any any query write pool.query which returns a promise of the query result
pool.query(`CREATE TABLE IF NOT EXISTS employee (
	ssn SMALLINT,
	name TEXT,
	user_name TEXT,
	password TEXT,
	PRIMARY KEY (ssn)
)`);

// This creates the chain table
pool.query(`CREATE TABLE IF NOT EXISTS chain (
	name TEXT,
	num_hotels SMALLINT,
	hq_address TEXT,
	email TEXT,
	phone_num TEXT,
	PRIMARY KEY (name)
)`);

// This creates the hotel table
// Need to add back this line: FOREIGN KEY (manager) REFERENCES employee(ssn),
pool.query(`CREATE TABLE IF NOT EXISTS hotel (
	id SERIAL PRIMARY KEY,
	name TEXT,
	chain TEXT,
	stars SMALLINT,
	numRooms SMALLINT,
	address TEXT,
	manager SMALLINT,
	FOREIGN KEY (chain) REFERENCES chain(name)
)`);

// This creates the room table
pool.query(`CREATE TABLE IF NOT EXISTS room (
	id SMALLINT,
	hotel SMALLINT,
	number INTEGER,
	price FLOAT,
	capacity INTEGER,
	view TEXT,
	amenitites TEXT,
	extendible BOOLEAN,
	damage BOOLEAN,
	PRIMARY KEY (id),
	FOREIGN KEY (hotel) REFERENCES hotel(id)
)`);

// This creates the customer table
pool.query(`CREATE TABLE IF NOT EXISTS customer (
	ssn SMALLINT,
	name TEXT,
	user_name TEXT,
	password TEXT,
	PRIMARY KEY (ssn)
)`);

// This creates the booking table
pool.query(`CREATE TABLE IF NOT EXISTS booking (
	room_id SMALLINT,
	customer SMALLINT,
	start_date DATE,
	end_date DATE,
	checked_in BOOLEAN,
	PRIMARY KEY (room_id, customer, start_date),
	FOREIGN KEY (room_id) REFERENCES room(id),
	FOREIGN KEY (customer) REFERENCES customer(ssn)
)`);

// This adds some example chains
// pool.query(`INSERT INTO chain IF NOT EXISTS(
// 	name,
// 	num_hotels,
// 	hq_address,
// 	email,
// 	phone_num
// ) 
// VALUES(
// 	'Princeton and Key',
// 	1,
// 	'31 Bay St',
// 	'customerinfo@princetonandkey.com',
// 	'3330000'
// ),
// (
// 	'Groupe Deluxe',
// 	1,
// 	'82 rue Sherbrooke',
// 	'aide@groupedeluxe.ca',
// 	'514'
// )
// `);

// // This adds some example hotels
// pool.query(`INSERT INTO hotel (
// 	name,
// 	chain,
// 	stars,
// 	numRooms,
// 	address,
// 	manager
// )
// VALUES(
// 	'Grand Ottawa Hotel',
// 	'Princeton and Key',
// 	5,
// 	127,
// 	'23 Sussex Drive',
// ),
// (
// 	'The Luxor Toronto',
// 	'Groupe Deluxe',
// 	5,
// 	243,
// 	'100 Adelaide St',
// )
// `);

// Example query to get all hotels
// this is async function
// await on the pool.query to get all rows from the hotel table and return it
// the router would be localhost:4040/hotels
router.get("/", async (req, res) => {
	const hotels = await pool.query<Hotel>("SELECT * FROM hotel");
	res.json(hotels.rows);
});

// get query by id
router.get("/:id", async (req, res) => {
	const hotels = await pool.query<Hotel>("SELECT * FROM hotel WHERE id = $1", [
		req.params.id,
	]);
	res.json(hotels.rows);
});

// post hotel at localhost:4040/hotels
// providing name, chain, stars, numRooms, address, manager in request query string
router.post("/", async (req, res) => {
	const { rows } = await pool.query<Hotel>(
		`INSERT INTO hotel (
		name,
		chain,
		stars,
		numRooms,
		address,
		manager
	) 
	VALUES(
		$1, $2, $3, $4, $5, $6
	)
	RETURNING *`,
		[
			req.query.name,
			req.query.chain,
			req.query.stars,
			req.query.numRooms,
			req.query.address,
			req.query.manager,
		]
	);

	res.json(rows[0]);
});

export { router };
