import express from "express";
import { pool } from "../database";
import { authenticate_employee } from "../middleware/auth";

const router = express.Router();

// get all hotels
router.get("/", async (req, res) => {
	const hotels = await pool.query<Hotel>("SELECT * FROM hotel ORDER BY id ASC");
	res.json(hotels.rows);
});

// get all chains
router.get("/chains", async (req, res) => {
	const c = await pool.query<Chain>("SELECT * FROM CHAIN");
	res.json(c.rows);
});

// get all hotels from given chain
router.get("/chains/:id", async (req, res) => {
	const c = await pool.query<Hotel>("SELECT * FROM hotel WHERE CHAIN = $1", [
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

// get booking
router.get("/booking/:customer_id/", async (req, res) => {
	const { rows } = await pool.query<Booking>(
		`SELECT b.start_date, r.id AS room_id, b.end_date, h.id AS hotel_id, h.name AS name, h.stars AS stars, h.city AS city, h.num_rooms AS num_rooms, h.address AS address, h.manager AS manager
		FROM booking b
		INNER JOIN room r ON b.room_id = r.id
		INNER JOIN hotel h ON r.hotel = h.id
		WHERE b.customer_id = $1`,
		[req.params.customer_id]
	);

	res.json(rows);
});

// get booking
router.get("/booking/:room_id/:customer_id/:start_date", async (req, res) => {
	const { rows } = await pool.query<Booking>(
		`SELECT * FROM booking WHERE
		room_id = $1 AND
		customer_id = $2 AND
		start_date = $3`,
		[req.params.room_id, req.params.customer_id, req.params.start_date]
	);

	res.json(rows[0]);
});

//get all bookings by hotel, return booking info
router.get("/bookings/:hotel_id", async (req, res) => {
	const { rows } = await pool.query<Booking>(
		`SELECT h.id AS hotel_id, h.name AS hotel_name, b.start_date, b.end_date, r.id AS room_id, r.number AS room_number, r.price AS room_price, r.capacity AS room_capacity, b.customer_id, b.checked_in
		FROM hotel h
		INNER JOIN room r ON h.id = r.hotel
		INNER JOIN booking b ON r.id = b.room_id
		WHERE h.id = $1
		ORDER BY r.id ASC, b.start_date ASC`,
		[req.params.hotel_id]
	);

	res.json(rows);
});

// post booking
router.post("/booking/:id", async (req, res) => {
	const { rows } = await pool.query<Booking>(
		`INSERT INTO booking (room_id, customer_id, start_date, end_date, checked_in)
		VALUES
		($1, $2, $3, $4, $5)
		RETURNING *
`,
		[
			req.params.id,
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
		room_id = $6 AND
		customer_id = $7 AND
		start_date = $8
		RETURNING *
`,
		[
			req.query.room_id,
			req.query.customer_id,
			req.query.start_date,
			req.query.end_date,
			req.query.checked_in,
			req.query.oldroom_id,
			req.query.oldcustomer_id,
			req.query.oldstart_date,
		]
	);

	res.json(rows[0]);
});

router.get("/average/:id", async (req, res) => {
	const average = await pool.query(
		"SELECT AVG(price) FROM room WHERE hotel = $1",
		[req.params.id]
	);
	res.json(average.rows[0].avg);
});

router.get("/available/:city", async (req, res) => {
	const available = await pool.query(
		`SELECT city, num_available_rooms
		FROM available_rooms_per_city
		WHERE city = $1`,
		[req.params.city]
	);
	res.json(available.rows[0].num_available_rooms);
}
);

router.get("/luxury/:city", async (req, res) => {
	const average = await pool.query(
		`WITH average_stars AS (
			SELECT AVG(stars) AS avg_stars
			FROM hotel
			WHERE city = $1
		)
		SELECT *
		FROM hotel
		WHERE city = $1
		AND stars >= (SELECT avg_stars FROM average_stars)
		`,
		[req.params.city]
	);
	res.json(average.rows);
});

router.get("/rooms", async (req, res) => {
	const rooms = await pool.query<Room>("SELECT * FROM room WHERE hotel = $1", [
		req.query.hotel,
	]);
	res.json(rooms.rows);
});

// get room by id
router.get("/rooms/:id", async (req, res) => {
	const rooms = await pool.query<Room>("SELECT * FROM room WHERE id = $1", [
		req.params.id,
	]);
	console.log(rooms.rows);
	res.json(rooms.rows);
});

// delete room by id
// fix amenities to allow arrays
router.patch("/rooms/:id", async (req, res) => {
	const { rows } = await pool.query<Room>(
		`
	UPDATE room
	  SET hotel = COALESCE($1, hotel),
	  number = COALESCE($2, number),
	  price = COALESCE($3, price),
	  capacity = COALESCE($4, capacity),
	  amenities = COALESCE($5, $6),
	  extendible = COALESCE($7, extendible),
	  damage = COALESCE($8, damage)
	  WHERE id = $9
	  RETURNING *
	  `,
		[
			req.query.hotel,
			req.query.number,
			req.query.price,
			req.query.capacity,
			req.query.amenities,
			(req.query.amenities as string)?.split(",") || [], // Fix: Ensure amenities is an array
			req.query.extendible,
			req.query.damage,
			req.params.id,
		]
	);
	res.json(rows[0]);
});

router.post("/rooms", async (req, res) => {
	const { rows } = await pool.query<Room>(
		`
		INSERT INTO room (hotel, number, price, capacity, view, amenities, extendible, damage)
		VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
		RETURNING *
	  `,
		[
			req.query.hotel,
			req.query.number,
			req.query.price,
			req.query.capacity,
			req.query.view,
			req.query.amenities,
			req.query.extendible,
			req.query.damage,
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

// list all distinct cities
router.get("/city", async (req, res) => {
	const hotels = await pool.query("SELECT DISTINCT city FROM hotel;");
	res.json(hotels.rows);
});

router.get("/city/:city", async (req, res) => {
	const hotels = await pool.query("SELECT * FROM hotel WHERE city = $1", [
		req.params.city,
	]);
	res.json(hotels.rows);
});

// serach for rooms in a given hotel in a given time period
router.get("/search", async (req, res) => {
	try {
		const hotels = await pool.query(
			`SELECT r.id AS room_id, r.number, r.price, r.capacity, r.view, r.amenities, r.extendible, r.damage
		FROM room r
		WHERE r.hotel = $1
		AND r.id NOT IN (
			SELECT DISTINCT b.room_id
			FROM booking b
			WHERE (b.start_date <= $2 AND b.end_date >= $3)
		)`,
			[req.query.hotel, req.query.end_date, req.query.start_date]
		);
		res.json(hotels.rows);
	} catch (error) {
		res.json([]);
	}
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
