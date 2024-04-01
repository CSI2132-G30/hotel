import axios from "axios";
import { useEffect, useState } from "react";
import BookingCard from "./BookingCard";

export default function Account() {
	const [bookings, setBookings] = useState<Info[]>([]);

	async function getRooms() {
		try {
			const res = await axios.get(
				`http://localhost:4040/hotels/booking/${
					JSON.parse(localStorage.getItem("token")!).ssn
				}`
			);
			console.log(res.data);
			setBookings(res.data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}

	useEffect(() => {
		getRooms();
	}, []);

	return (
		<>
			<div className='flex-column text-center'>
				<h1 className='text-center text-6xl py-8'>My Bookings</h1>
				<div className='flex flex-row flex-wrap gap-2 items-center justify-center'>
					{bookings.map((b) => (
						<BookingCard b={b}></BookingCard>
					))}
				</div>
			</div>
		</>
	);
}
