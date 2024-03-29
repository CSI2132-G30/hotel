import type { Request, Response, NextFunction } from "express";
import "dotenv/config";
import { pool } from "../database";

export async function authenticate_employee(req: Request, res: Response, next: NextFunction) {
  const token = req.header("token");
  if (!token) return res.status(401).send("Access Denied");
  const t = JSON.parse(token!);
  const users = await pool.query("SELECT * FROM employee WHERE username = $1 and password = $2", [
    t.username, t.password
  ]);
  if (users.rows.length === 0) return res.status(401).send("Access Denied");
  res.locals.user = users.rows[0];
  next();
}

export async function authenticate_customer(req: Request, res: Response, next: NextFunction) {
  const token = req.header("token");
  if (!token) return res.status(401).send("Access Denied");
  const t = JSON.parse(token!);
  const users = await pool.query("SELECT * FROM customer WHERE username = $1 and password = $2", [
    t.username, t.password
  ]);
  if (users.rows.length === 0) return res.status(401).send("Access Denied");
  res.locals.user = users.rows[0];
  next();
}