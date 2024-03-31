import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { onChange } from "../utils/event";

interface RoomCardEditProps {
	r: Room;
}

const RoomCardEdit: React.FC<RoomCardEditProps> = ({ r }) => {
	const [room_id, setRoom_id] = useState<number>(r.id);
	const [hotel_id, setHotel_id] = useState<number>(r.hotel);
	const [number, setNumber] = useState<number>(r.number);
	const [price, setPrice] = useState<number>(r.price);
	const [capacity, setCapacity] = useState<number>(r.capacity);
	const [view, setView] = useState<string>(r.view);
	const [amenities, setAmenities] = useState<string>(r.amenities);
	const [extendible, setExtendible] = useState<boolean>(r.extendible);
	const [damage, setDamage] = useState<boolean>(r.damage);
	const [deleted, setDeleted] = useState<boolean>(false);

	console.log("client", amenities);
	console.log("server", r.amenities);
	async function updateRoom() {
		var form = document.getElementById("myForm");
		function handleForm(event: any) {
			event.preventDefault();
		}
		form!.addEventListener("submit", handleForm);

		try {
			await axios.patch(
				`http://localhost:4040/hotels/rooms/${r.id}?hotel_id=${hotel_id}&number=${number}&price=${price}&capacity=${capacity}&view=${view}&amenities=${amenities}&extendible=${extendible}&damage=${damage}`
			);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}

	async function deleteRoom() {
		try {
			await axios.delete(`http://localhost:4040/hotels/rooms/${r.id}`);
			setDeleted(true);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}



	return (
		<div className={
			deleted
				? "card w-96 bg-base-100 shadow-xl hidden"
				: "card w-96 bg-base-100 shadow-xl"
		}>
			<form className='card-body' id="myForm">
				
				<h1 className='card-title'>Room ID: {r.id}</h1>
				<h2>Price:</h2>
				<textarea
					className='textarea textarea-bordered'
					placeholder={r.price.toString()}
					value={price}
					onChange={onChange(setPrice)}></textarea>
					
				<h3>Capacity:</h3>
				<textarea
					className='textarea textarea-bordered'
					placeholder={r.capacity.toString()}
					value={capacity}
					onChange={onChange(setCapacity)}></textarea>
				<p>Room Number:</p>
				<textarea
					className='textarea textarea-bordered'
					placeholder={r.number.toString()}
					value={number}
					onChange={onChange(setNumber)}></textarea>
				<p>Extendible:</p>
				<input
					className='textarea textarea-bordered'
					type="checkbox"
					checked={extendible}
					onChange={() => setExtendible(!extendible)}></input>
				<p>Damage:</p>
				<input
					className='textarea textarea-bordered'
					type="checkbox"
					checked={damage}
					onChange={() => setDamage(!damage)}></input>
				<p>View:</p>
				<textarea
					className='textarea textarea-bordered'
					placeholder={r.view}
					value={view}
					onChange={onChange(setView)}></textarea>
				<p>Amenities:</p>
				<textarea
					className='textarea textarea-bordered'
					placeholder={r.amenities}
					value={amenities}
					onChange={onChange(setAmenities)}
					></textarea>
				<div className='card-actions justify-end'>
				<button
					className='btn btn-primary'
					onClick={updateRoom}
					type='button'>
					Update Parameters
				</button>

				<button
					className='btn btn-error'
					onClick={deleteRoom}
					type='button'>
					Delete
				</button>
				</div>
				
			</form>
		</div>
	);
};

export default RoomCardEdit;
