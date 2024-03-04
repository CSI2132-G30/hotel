import express from "express";
import { pool } from "../database";

const router = express.Router();

// This creates the hotel table
// to do any any query write pool.query which returns a promise of the query result
pool.query(`CREATE TABLE IF NOT EXISTS hotels (
	id SERIAL PRIMARY KEY,
	name TEXT,
	chain TEXT,
	stars SMALLINT,
	numRooms SMALLINT,
	address TEXT,
	manager SMALLINT
)`);

// random query you can delete later
// just to test stuff
pool.query(`INSERT INTO hotel (
	name,
	chain,
	stars,
	numRooms,
	address,
	manager
) 
VALUES(
	'some hotel',
	'the best chain ever',
	5,
	100,
	'100 washington ave',
	'23'
),
(
	'some hotel2',
	'the best chain ever',
	5,
	100,
	'100 washington ave',
	'23'
)
`);

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

export { router };
