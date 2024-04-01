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
		manager: string;
	};

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
		customer_id: string;
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
		amenities: string;
		extendible: boolean;
		damage: boolean;
	};

	type Info = {
		start_date: Date;
		end_date: Date;
		id: number;
		name: string;
		stars: number;
		city: string;
		num_rooms: number;
		room_id: number;
		address: string;
		manager: number;
	};

	type City = {
		city: string;
	};
}
