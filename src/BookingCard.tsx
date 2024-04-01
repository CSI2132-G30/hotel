import axios from "axios";
import moment from "moment";
import { useState } from "react";

interface HotelCardProps {
	b: Info;
}

const BookingCard: React.FC<HotelCardProps> = ({ b }) => {
	const [cancelled, setCancelled] = useState<boolean>(false);

	async function deleteBooking() {
		try {
			await axios.delete(
				`http://localhost:4040/hotels/booking/${b.room_id}/${
					JSON.parse(localStorage.getItem("token")!).ssn
				}/${b.start_date}`
			);
			setCancelled(true);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}

	return (
		<div
			className={
				cancelled
					? "card w-96 bg-base-100 shadow-xl hidden"
					: "card w-96 bg-base-100 shadow-xl"
			}>
			<div className='card-body text-left'>
				<h1 className='card-title'>
					{b.name}, {b.city}
				</h1>
				<h2>{b.num_rooms} room(s)</h2>
				<h2>{b.stars}</h2>
				<p>Start: {moment(b.start_date).utc().format("YYYY-MM-DD")}</p>
				<p>End: {moment(b.end_date).utc().format("YYYY-MM-DD")}</p>
				<h2>Address: {b.address}</h2>
				<div className='card-actions justify-left'>
					<button className='btn btn-error' onClick={deleteBooking}>
						Cancel Booking
					</button>
				</div>
			</div>
		</div>
	);
};

export default BookingCard;
