import axios from "axios";
import moment from "moment";
import { useState } from "react";
import { onChange } from "../utils/event";

interface BookingCardEditProps {
	b: Booking;
}

const BookingCardEdit: React.FC<BookingCardEditProps> = ({ b }) => {
	const [room_id, setRoom_id] = useState<number>(b.room_id);
	const [customer_id, setCustomer_id] = useState<number>(b.customer_id);
	const [start_date, setStart_date] = useState<Date>(b.start_date);
	const [end_date, setEnd_date] = useState<Date>(b.end_date);
	const [checked_in, setChecked_in] = useState<boolean>(b.checked_in);
	const [cancelled, setCancelled] = useState<boolean>(false);

	async function updateBooking() {
		var form = document.getElementById("myForm");
		function handleForm(event: any) {
			event.preventDefault();
		}
		form!.addEventListener("submit", handleForm);

		try {
			await axios.patch(
				`http://localhost:4040/hotels/booking/?room_id=${room_id}&customer_id=${customer_id}&start_date=${start_date}&end_date=${end_date}&checked_in=${checked_in}`
			);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}

	async function deleteBooking() {
		try {
			console.log("delete");
			await axios.delete(
				`http://localhost:4040/hotels/booking/${b.room_id}/${b.customer_id}/${b.start_date}`
			);
			setCancelled(true);
			console.log("deleted");
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}
	return (
		<div>
			<div
				className={
					cancelled
						? "card w-96 bg-base-100 shadow-xl hidden"
						: "card w-96 bg-base-100 shadow-xl"
				}>
				<div className='card-body'>
					<form className='p-0' id='myForm'>
						<h1 className='card-title'>Room ID</h1>
						<textarea
							className='textarea textarea-bordered'
							placeholder={b.room_id.toString()}
							value={room_id}
							onChange={onChange(setRoom_id)}></textarea>
						<h2>CustomerID:</h2>
						<textarea
							className='textarea textarea-bordered'
							placeholder={String(b.customer_id)}
							value={customer_id}
							onChange={onChange(setCustomer_id)}></textarea>
						<h3>Start Date:</h3>
						<input
							className='textarea textarea-bordered'
							type='date'
							value={moment(b.start_date).utc().format("YYYY-MM-DD")}
							onChange={onChange(setStart_date)}></input>
						<p>End Date:</p>
						<input
							className='textarea textarea-bordered'
							type='date'
							value={moment(b.end_date).utc().format("YYYY-MM-DD")}
							onChange={onChange(setEnd_date)}></input>
						<p>Checked in?:</p>
						<input
							className='textarea textarea-bordered'
							type='checkbox'
							checked={checked_in}
							onChange={() => setChecked_in(!checked_in)}></input>

						<div className='card-actions justify-end'>
							<button
								className='btn btn-primary'
								onClick={updateBooking}
								type='submit'>
								Update Parameters
							</button>

							<button
								className='btn btn-error'
								onClick={deleteBooking}
								type='button'>
								Delete
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default BookingCardEdit;
