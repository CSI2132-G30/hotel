import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { router } from "./routes/hotels";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/hotels", router);
app.listen(4040);
