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

//Display chains
router.get("/chains", async (req, res) => {
	const c = await pool.query<Chain>("SELECT * FROM CHAIN");
	res.json(c.rows);
});

// get hotel by id
router.get("/customers", async (req, res) => {
	const hotels = await pool.query<Hotel>("SELECT * FROM customer");
	res.json(hotels.rows);
});

// get hotel by id
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

// post booking
router.post("/booking", async (req, res) => {
	const { rows } = await pool.query<Booking>(
		`INSERT INTO booking (room_id, customer_id, start_date, end_date, checked_in)
		VALUES
		($1, $2, $3, $4, $5)
		RETURNING *
`,
		[
			req.query.room_id,
			req.query.customer_id,
			req.query.start_date,
			req.query.end_date,
			req.query.checked_in,
		]
	);

	res.json(rows[0]);
});

// create customer
// need to add employee
router.post("/create", async (req, res) => {
	const { rows } = await pool.query<User>(
		`INSERT INTO customer (ssn, name, username, password)
			VALUES
			($1, $2, $3, $4)
			RETURNING *
	`,
		[req.query.ssn, req.query.name, req.query.username, req.query.password]
	);

	res.json(rows[0]);
});

export { router };
