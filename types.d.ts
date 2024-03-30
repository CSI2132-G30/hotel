export {};

declare global {
	type Hotel = {
		id: number;
		name: string;
		chain: string;
		stars: number;
		city: string;
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
		ssn: string;
		name: string;
		username: string;
		password: string;
	};

	type Room = {
		room_id: number;
		hotel: number;
		number: number;
		price: number;
		capacity: number;
		view: string;
		amenities: string[];
		extendible: boolean;
		damage: boolean;
	};

	type City = {
		city: string;
	};
}
