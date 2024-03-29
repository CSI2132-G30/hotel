import express from "express";
import { pool } from "../database";

const router = express.Router();

// get all hotels
router.get("/", async (req, res) => {
	const hotels = await pool.query<Hotel>("SELECT * FROM hotel");
	res.json(hotels.rows);
});

// get all chains
router.get("/chains", async (req, res) => {
	const c = await pool.query<Chain>("SELECT * FROM CHAIN");
	res.json(c.rows);
});

// get all hotels from given chain
router.get("/chains/:id", async (req, res) => {
	const c = await pool.query<Chain>("SELECT * FROM hotel WHERE CHAIN = $1", [
		req.params.id,
	]);
	res.json(c.rows);
});

// post hotel
router.post("/", async (req, res) => {
	const { rows } = await pool.query<Hotel>(
		`INSERT INTO hotel (
		name,
		chain,
		stars,
		city,
		num_rooms,
		address,
		manager
	)
	VALUES(
		$1, $2, $3, $4, $5, $6, $7
	)
	RETURNING *`,
		[
			req.query.name,
			req.query.chain,
			req.query.stars,
			req.query.city,
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

// delete booking
router.delete(
	"/booking/:room_id/:customer_id/:start_date",
	async (req, res) => {
		const { rows } = await pool.query<Booking>(
			`DELETE FROM booking WHERE
		room_id = $1 AND
		customer_id = $2 AND
		start_date = $3
		RETURNING *
`,
			[req.params.room_id, req.params.customer_id, req.params.start_date]
		);

		res.json(rows[0]);
	}
);

// update booking
router.patch("/booking", async (req, res) => {
	const { rows } = await pool.query<Booking>(
		`UPDATE booking 
		SET room_id = COALESCE($1, room_id),
    	customer_id = COALESCE($2, customer_id),
		start_date = COALESCE($3, start_date),
		end_date = COALESCE($4, end_date),
    	checked_in = COALESCE($5, checked_in)
		WHERE
		room_id = $1 AND
		customer_id = $2 AND
		start_date = $3
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

router.get("/average", async (req, res) => {
	const average = await pool.query(
		"SELECT AVG(price) FROM room WHERE hotel = $1",
		[req.query.id]
	);
	res.json(average.rows[0]);
});

router.get("/sale", async (req, res) => {
	const average = await pool.query(
		"SELECT * FROM room WHERE price < (SELECT AVG(price) FROM room)"
	);
	res.json(average.rows);
});

router.get("/rooms", async (req, res) => {
	const rooms = await pool.query<Room>("SELECT * FROM room WHERE hotel = $1", [
		req.query.id,
	]);
	res.json(rooms.rows);
});

// get room by id
router.get("/rooms/:id", async (req, res) => {
	const rooms = await pool.query<Room>("SELECT * FROM room WHERE id = $1", [
		req.params.id,
	]);
	res.json(rooms.rows);
});

// delete room by id
router.delete("/rooms/:id", async (req, res) => {
	const { rows } = await pool.query<Room>(
		`
    UPDATE room
      SET hotel = COALESCE($1, hotel),
      number = COALESCE($2, number),
      price = COALESCE($3, price),
	  capacity = COALESCE($4, capacity),
	  amenities = COALESCE($5, amenities),
	  extendible = COALESCE($6, extendible),
	  damage = COALESCE($7, damage)
      WHERE id = $8
      RETURNING *
      `,
		[
			req.query.hotel,
			req.query.number,
			req.query.price,
			req.query.capacity,
			req.query.amenities,
			req.query.extendible,
			req.query.damage,
			req.params.id,
		]
	);
	res.json(rows[0]);
});

// update room by id
router.delete("/rooms/:id", async (req, res) => {
	const rooms = await pool.query("DELETE FROM room WHERE id = $1 RETURNING *", [
		req.params.id,
	]);
	res.json(rooms.rows[0]);
});

router.get("/city/:city", async (req, res) => {
	const hotels = await pool.query("SELECT * FROM hotel WHERE city = $1", [
		req.params.city,
	]);
	res.json(hotels.rows);
});

// get hotel by id
router.get("/:id", async (req, res) => {
	const hotels = await pool.query<Hotel>("SELECT * FROM hotel WHERE id = $1", [
		req.params.id,
	]);
	res.json(hotels.rows[0]);
});

// delete hotel by id
router.delete("/:id", async (req, res) => {
	const hotels = await pool.query<Hotel>(
		"DELETE FROM hotel WHERE id = $1 RETURNING *",
		[req.params.id]
	);
	res.json(hotels.rows[0]);
});

// update hotel by id
router.patch("/:id", async (req, res) => {
	const { rows } = await pool.query<Hotel>(
		`
    UPDATE hotel
      SET name = COALESCE($1, name),
      chain = COALESCE($2, chain),
      stars = COALESCE($3, stars),
	  city = COALESCE($4, city),
	  num_rooms = COALESCE($5, num_rooms),
	  address = COALESCE($6, address),
	  manager = COALESCE($7, manager)
      WHERE id = $8
      RETURNING *
      `,
		[
			req.query.name,
			req.query.chain,
			req.query.stars,
			req.query.city,
			req.query.numRooms,
			req.query.address,
			req.query.manager,
			req.params.id,
		]
	);

	res.json(rows[0]);
});

export { router };
