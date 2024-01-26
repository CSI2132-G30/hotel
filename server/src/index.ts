import express from "express";
import cors from "cors";

import { router } from "./routes/hotels";

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/hotels", router);
app.listen(4040);
