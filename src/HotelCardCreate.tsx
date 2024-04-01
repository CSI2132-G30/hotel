import { useEffect, useState } from "react";
import RoomCardEdit from "./RoomCardEdit";
import axios from "axios";
import { onChange } from "../utils/event";


interface HotelCardCreateProps {
}

const HotelCardCreate: React.FC<HotelCardCreateProps> = () => {
	const [rooms, setRooms] = useState<Room[]>([]);
	const [name, setName] = useState<string>();
	const [address, setAddress] = useState<string>();
	const [stars, setStars] = useState<number>();
	const [city, setCity] = useState<string>();
	const [chain, setChain] = useState<string>();
	const [num_rooms, setNumRooms] = useState<number>();
	const [manager, setManager] = useState<string>();

    async function createHotel() {
        console.log(`http://localhost:4040/hotels?name=${name}&address=${address}&stars=${stars}&city=${city}&chain=${chain}&numRooms=0&manager=${manager}`)
        try {
            await axios.post(`http://localhost:4040/hotels?name=${name}&address=${address}&stars=${stars}&city=${city}&chain=${chain}&numRooms=0&manager=${manager}`);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    

    }

	return (
		<div className={'flex flex-row justify-center items-center w-full'}>
			<div className='collapse bg-base-200'>
				<input type='checkbox' className='peer' />
				<span className='collapse-title border border-base-300 bg-base-200 '>
					Create new hotel
					
				</span>
				
				<div className='collapse-content flex flex-wrap justify-center items-center gap-2'>
					<div>
					<div className="flex flex-wrap gap-5">
					<h2>name:</h2>
					<textarea
						className='textarea textarea-bordered h-min w-min'
						value={name}
						onChange={(v) => setName(v.target.value)}></textarea>
					<h3>address:</h3>
					<textarea
						className='textarea textarea-bordered'
						value={address}
						onChange={(v) => setAddress(v.target.value)}></textarea>
					<h3>stars:</h3>
					<input
						step="0.1"
						type="number"
						className='textarea textarea-bordered'
						value={stars}
						onChange={onChange(setStars)}></input>
					<h3>city:</h3>
					<textarea
						className='textarea textarea-bordered'
						value={city}
						onChange={(v) => setCity(v.target.value)}></textarea>
					<h3>chain:</h3>
					<textarea
						className='textarea textarea-bordered'
						value={chain}
						onChange={(v) => setChain(v.target.value)}></textarea>
					<h3>number of rooms:</h3>
					

					<h3>manager:</h3>
					<textarea
							className='textarea textarea-bordered'
							
							value={manager}
							onChange={(v) => setManager(v.target.value)}>
                            </textarea>
					
					<button className="btn btn-primary" onClick={createHotel}>Create</button>
				</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HotelCardCreate;
