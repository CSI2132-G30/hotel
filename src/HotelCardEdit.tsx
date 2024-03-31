import { useEffect, useState } from "react";
import RoomCardEdit from "./RoomCardEdit";
import axios from "axios";
import { onChange } from "../utils/event";

interface HotelCardEditProps {
	h: Hotel;
}

const HotelCardEdit: React.FC<HotelCardEditProps> = ({ h }) => {
	const [rooms, setRooms] = useState<Room[]>([]);
	const [name, setName] = useState<string>(h.name);
	const [address, setAddress] = useState<string>(h.address);
	const [stars, setStars] = useState<number>(h.stars);
	const [city, setCity] = useState<string>(h.city);
	const [chain, setChain] = useState<string>(h.chain);
	const [num_rooms, setNumRooms] = useState<number>(h.num_rooms);
	const [manager, setManager] = useState<number>(h.manager);
	const [deleted, setDeleted] = useState<boolean>(false);
	
	async function updateHotel() {
		try {
			const res = await axios.patch(
				`http://localhost:4040/hotels/${h.id}?name=${name}&address=${address}&stars=${stars}&city=${city}&chain=${chain}&num_rooms=${num_rooms}&manager=${manager}`
			);
			console.log(res.data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}

	async function deleteHotel() {
		try {
			await axios.delete(`http://localhost:4040/hotels/${h.id}`);
			setDeleted(true);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}


	async function getRooms() {
		try {
			console.log(`http://localhost:4040/hotels/rooms?hotel=${h.id}`);
			const res = await axios.get(
				`http://localhost:4040/hotels/rooms?hotel=${h.id}`
			);
			console.log(res.data);
			setRooms(res.data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}
	useEffect(() => {
		getRooms();
	}, []);
	return (
		<div className={deleted ? 'flex flex-row justify-center items-center w-full hidden' :'flex flex-row justify-center items-center w-full'}>
			<div className='collapse bg-base-200'>
				<input type='checkbox' className='peer' />
				<span className='collapse-title border border-base-300 bg-base-200 '>
					{h.name}
					
				</span>
				
				<div className='collapse-content flex flex-wrap justify-center items-center gap-2'>
					<div>
					<div className="flex flex-wrap gap-5">
					<h2>name:</h2>
					<textarea
						className='textarea textarea-bordered h-min w-min'
						placeholder={h.name}
						value={name}
						onChange={(v) => setName(v.target.value)}></textarea>
					<h3>address:</h3>
					<textarea
						className='textarea textarea-bordered'
						placeholder={h.address}
						value={address}
						onChange={(v) => setAddress(v.target.value)}></textarea>
					<h3>stars:</h3>
					<input
						step="0.1"
						type="number"
						className='textarea textarea-bordered'
						placeholder={h.stars.toString()}
						value={stars}
						onChange={onChange(setStars)}></input>
					<h3>city:</h3>
					<textarea
						className='textarea textarea-bordered'
						placeholder={h.city}
						value={city}
						onChange={(v) => setCity(v.target.value)}></textarea>
					<h3>chain:</h3>
					<textarea
						className='textarea textarea-bordered'
						placeholder={h.chain}
						value={chain}
						onChange={(v) => setChain(v.target.value)}></textarea>
					<h3>num_rooms:</h3>
					
					<div>
						{num_rooms.toString()}
					</div>

					<h3>manager:</h3>
					<textarea
						className='textarea textarea-bordered'
						placeholder={h.manager.toString()}
						value={manager.toString()}
						onChange={(v) => setManager(parseInt(v.target.value))}></textarea>
					
					<button className="btn btn-primary" onClick={updateHotel}>Update</button>
					<button className="btn btn-error" onClick={deleteHotel}>Delete</button>
				</div>
					</div>
					{rooms.map((h) => (
						<RoomCardEdit r={h}></RoomCardEdit>
					))}
				</div>
			</div>
		</div>
	);
};

export default HotelCardEdit;
