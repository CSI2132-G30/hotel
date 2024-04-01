import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { onChange } from "../utils/event";

interface BookingCardEditProps {
	b: Booking;
}

const BookingCardEdit: React.FC<BookingCardEditProps> = ({ b }) => {
	const [room_id, setRoom_id] = useState<number>(b.room_id);
	const [customer_id, setCustomer_id] = useState<string>(b.customer_id);
	const [start_date, setStart_date] = useState<string>(moment(b.start_date).utc().format("YYYY-MM-DD"));
	const [end_date, setEnd_date] = useState<string>(moment(b.end_date).utc().format("YYYY-MM-DD"));
	const [checked_in, setChecked_in] = useState<boolean>(b.checked_in);
	const [cancelled, setCancelled] = useState<boolean>(false);
    const [customers, setCustomers] = useState<User[]>([]);
    const [rooms, setRooms] = useState<Room[]>([]);


    async function getCustomers() {
        try {
            const res = await axios.get(`http://localhost:4040/users/customers`);
            setCustomers(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    async function getRooms() {
        try {
            const res = await axios.get(`http://localhost:4040/hotels/hotel/rooms/?hotel_id=${b.room_id}`);
            console.log(res.data);
            setRooms(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

	async function updateBooking() {
		var form = document.getElementById("myForm");
		function handleForm(event: any) {
			event.preventDefault();
		}
		form!.addEventListener("submit", handleForm);

		try {
			await axios.patch(
				`http://localhost:4040/hotels/booking/?room_id=${room_id}&customer_id=${customer_id}&start_date=${start_date}&end_date=${end_date}&checked_in=${checked_in}&oldroom_id=${b.room_id}&oldcustomer_id=${b.customer_id}&oldstart_date=${b.start_date}`
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

    useEffect(() => {
        getCustomers();
        getRooms();
    }
    , []);

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
						<select
							className='select select-bordered'
							
							value={room_id}
							onChange={(v) => setRoom_id(parseInt(v.target.value))}>
                            {rooms.map((c) => (
                                <option>{c.room_id}</option>
                            ))}
                            </select>
						<h2>CustomerID:</h2>
						<select
							className='select select-bordered'
							
							value={customer_id}
							onChange={(v) => setCustomer_id(v.target.value)}>
                            {customers.map((c) => (
                                <option>{c.ssn}</option>
                            ))}
                            </select>
						<h3>Start Date:</h3>
						<input
							className='textarea textarea-bordered'
							type='date'
							value={start_date}
							onChange={(v) => {setStart_date(v.target.value)}}></input>
						<p>End Date:</p>
						<input
							className='textarea textarea-bordered'
							type='date'
							value={end_date}
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
