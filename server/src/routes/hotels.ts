import express from "express";
import { pool } from "../database";

const router = express.Router();

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
