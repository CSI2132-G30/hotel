import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { router } from "./routes/hotels";

declare global {
	export type Hotel = {
		id: number;
		name: string;
		chain: string;
		stars: number;
		numRooms: number;
		address: string;
		manager: number;
	};
}

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/hotels", router);
app.listen(4040, () => console.log("app listening on port 4040"));
