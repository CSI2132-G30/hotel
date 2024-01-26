import express from "express";

import { pool } from "../database";

const router = express.Router();

// Example query to get all hotels
router.get("/", async (req, res) => {
	const hotels = await pool.query("SELECT * FROM recipe");
	return hotels.rows;
});

export { router };
