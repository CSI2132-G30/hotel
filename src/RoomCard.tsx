import axios from "axios";
import { useNavigate } from "react-router-dom";

interface RoomCardProps {
	r: Room;
	startDate: string;
	endDate: string;
}

const RoomCard: React.FC<RoomCardProps> = ({ r, startDate, endDate }) => {
	const navigate = useNavigate();
	async function makeBooking() {
		try {
			await axios.post(
				// change the customer id
				`http://localhost:4040/hotels/booking?room_id=${r.room_id}&customer_id=111 111 111&start_date=${startDate}&end_date=${endDate}&checked_in=FALSE`
			);
			navigate("/account");
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}

	return (
		<div className='card w-96 bg-base-100 shadow-xl'>
			<div className='card-body'>
				<h1 className='card-title'>Room Number: {r.number}</h1>
				<h2>Price: {r.price}</h2>
				<h3>Capacity: {r.capacity}</h3>
				<p>{r.view}</p>
				<p>Amenities: {r.amenities.join(", ")}</p>
				<div className='card-actions justify-end'>
					<button className='btn btn-primary' onClick={makeBooking}>
						Book Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default RoomCard;
