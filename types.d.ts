export {};

declare global {
	type Hotel = {
		id: number;
		name: string;
		chain: string;
		stars: number;
		num_rooms: number;
		address: string;
		manager: number;
	};
	// id SERIAL PRIMARY KEY,
	// name TEXT,
	// num_hotels SMALLINT,
	// hq_address TEXT,
	// email TEXT,
	// phone_num TEXT
	type Chain = {
		id: number;
		name: string;
		num_hotels: number;
		hq_address: string;
		email: string;
		phone_num: string;
	};

	type Booking = {
		room_id: number;
		customer_id: number;
		start_date: Date;
		end_date: Date;
		checked_in: boolean;
	};

	type User = {
		ssn: number;
		name: string;
		username: string;
		password: string;
	};
}
