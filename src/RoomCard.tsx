import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface RoomCardProps {
	r: Room;
	startDate: string;
	endDate: string;
}

const RoomCard: React.FC<RoomCardProps> = ({ r, startDate, endDate }) => {
	console.log(r);
	const navigate = useNavigate();
	const [create, setCreate] = useState<boolean>(false);

	async function makeBooking() {
		console.log(
			`http://localhost:4040/hotels/booking/${r.room_id}?customer_id=${
				localStorage.getItem("customerID") ??
				JSON.parse(localStorage.getItem("token")!).ssn
			}&start_date=${startDate}&end_date=${endDate}&checked_in=FALSE`
		);
		try {
			await axios.post(
				// change the customer id
				`http://localhost:4040/hotels/booking/${r.room_id}?customer_id=${
					localStorage.getItem("customerID") ??
					JSON.parse(localStorage.getItem("token")!).ssn
				}&start_date=${startDate}&end_date=${endDate}&checked_in=FALSE`
			);
			if (
				JSON.parse(localStorage.getItem("token")!).ssn ===
				localStorage.getItem("customerID")
			) {
				navigate("/account");
			}
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}

	return (
		<>
			<div className='card w-96 bg-base-100 shadow-xl'>
				<div className='card-body'>
					<h1 className='card-title'>Room {r.number}</h1>
					<h2>Price: {r.price}</h2>
					<h3>Capacity: {r.capacity}</h3>
					<p>{r.view}</p>
					<p>Amenities: {r.amenities}</p>
					<div className='card-actions justify-end'>
						{create ? (
							<div className=' text-lime-300'>
								Booked for user {localStorage.getItem("customerID")}
							</div>
						) : (
							<button
								className='btn btn-primary'
								onClick={() => {
									makeBooking();
									setCreate(true);
								}}>
								Book Now
							</button>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default RoomCard;
