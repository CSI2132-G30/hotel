import express from "express";
import { pool } from "../database";

const userRouter = express.Router();

// get all customers
userRouter.get("/customers", async (req, res) => {
	const customer = await pool.query<User>("SELECT * FROM customer");
	res.json(customer.rows);
});

// get all employees
userRouter.get("/employees", async (req, res) => {
	const employee = await pool.query<User>("SELECT * FROM employee");
	res.json(employee.rows);
});

// create customer
userRouter.post("/customers/create", async (req, res) => {
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

// create employee
userRouter.post("/employees/create", async (req, res) => {
	const { rows } = await pool.query<User>(
		`INSERT INTO employee (ssn, name, username, password)
			VALUES
			($1, $2, $3, $4)
			RETURNING *
	`,
		[req.query.ssn, req.query.name, req.query.username, req.query.password]
	);

	res.json(rows[0]);
});

// get customer by id
userRouter.get("/customers/:ssn", async (req, res) => {
	const customer = await pool.query<User>(
		"SELECT * FROM customer WHERE ssn = $1",
		[req.params.ssn]
	);
	res.json(customer.rows);
});

// get employee by id
userRouter.get("/employees/:ssn", async (req, res) => {
	const employee = await pool.query<User>(
		"SELECT * FROM employee WHERE ssn = $1",
		[req.params.ssn]
	);
	res.json(employee.rows);
});

// delete customer given id
userRouter.delete("/customers/:ssn", async (req, res) => {
	const customer = await pool.query<User>(
		"DELETE FROM customer WHERE ssn = $1 RETURNING *",
		[req.params.ssn]
	);
	res.json(customer.rows);
});

// delete employee give id
userRouter.delete("/employees/:ssn", async (req, res) => {
	const employee = await pool.query<User>(
		"DELETE FROM employee WHERE ssn = $1 RETURNING *",
		[req.params.ssn]
	);
	res.json(employee.rows);
});

// update customer given ssn
userRouter.patch("/customers/:ssn", async (req, res) => {
	const customer = await pool.query<User>(
		`
    UPDATE customer
      SET name = COALESCE($1, name),
      username = COALESCE($2, username),
      password = COALESCE($3, password)
      WHERE ssn = $4
      RETURNING *
      `,
		[req.body.name, req.body.username, req.body.password, req.params.ssn]
	);
	res.json(customer.rows);
});

// update employee given ssn
userRouter.patch("/employees/:ssn", async (req, res) => {
	const employee = await pool.query<User>(
		`
    UPDATE employee
      SET name = COALESCE($1, name),
      username = COALESCE($2, username),
      password = COALESCE($3, password)
      WHERE ssn = $4
      RETURNING *
      `,
		[req.body.name, req.body.username, req.body.password, req.params.ssn]
	);
	res.json(employee.rows[0]);
});
userRouter.post("/customers/login", async (req, res) => {
	const { rows } = await pool.query<User>(
		"SELECT * FROM customer WHERE username = $1 AND password = $2",
		[req.query.username, req.query.password]
	);
	if (rows.length === 0) {
		res.json({ error: "Invalid username or password" });
		return;
	}

	res.json(rows[0]);
});

userRouter.post("/employees/login", async (req, res) => {
	const { rows } = await pool.query<User>(
		"SELECT * FROM employee WHERE username = $1 AND password = $2",
		[req.query.username, req.query.password]
	);
	if (rows.length === 0) {
		res.json({ error: "Invalid username or password" });
		return;
	}

	res.json(rows[0]);
});

export { userRouter };
