import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { onChange } from "../utils/event";


export default function RoomCardCreate() {
	const [room_id, setRoom_id] = useState<number>();
	const [hotel_id, setHotel_id] = useState<number>();
	const [number, setNumber] = useState<number>();
	const [price, setPrice] = useState<number>();
	const [capacity, setCapacity] = useState<number>();
	const [view, setView] = useState<string>();
	const [amenities, setAmenities] = useState<string>();
	const [extendible, setExtendible] = useState<boolean>();
	const [damage, setDamage] = useState<boolean>();

    async function createRoom() {
        try {
            await axios.post(
                `http://localhost:4040/hotels/rooms?hotel_id=${hotel_id}&number=${number}&price=${price}&capacity=${capacity}&view=${view}&amenities=${amenities}&extendible=${extendible}&damage=${damage}`
            );
        }
        catch (error) {
            console.error("Error fetching data:", error);
        }
    }


	return (
		<div className={
			 "card w-96 bg-base-100 shadow-xl"
		}>
			<form className='card-body' id="myForm">
				
				<h1 className='card-title'>Room ID:</h1>
				<h2>Price:</h2>
				<textarea
					className='textarea textarea-bordered'
					value={price}
					onChange={onChange(setPrice)}></textarea>
					
				<h3>Capacity:</h3>
				<textarea
					className='textarea textarea-bordered'
					value={capacity}
					onChange={onChange(setCapacity)}></textarea>
				<p>Room Number:</p>
				<textarea
					className='textarea textarea-bordered'
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
					value={view}
					onChange={onChange(setView)}></textarea>
				<p>Amenities:</p>
				<textarea
					className='textarea textarea-bordered'
					value={amenities}
					onChange={onChange(setAmenities)}
					></textarea>
				<div className='card-actions justify-end'>
				<button
					className='btn btn-success'
					type='button'
                    onClick={createRoom}>
					Create Room
				</button>

				</div>
				
			</form>
		</div>
	);
};

