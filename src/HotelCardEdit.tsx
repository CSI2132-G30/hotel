import { useEffect, useState } from "react";
import RoomCardEdit from "./RoomCardEdit";
import axios from "axios";

interface HotelCardEditProps {
	h: Hotel;
}

const HotelCardEdit: React.FC<HotelCardEditProps> = ({ h }) => {
	const [rooms, setRooms] = useState<Room[]>([]);

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
		<div className='flex flex-row justify-center items-center w-full'>
			<div className='collapse bg-base-200'>
				<input type='checkbox' className='peer' />
				<div className='collapse-title border border-base-300 bg-base-200 '>
					{h.name}
				</div>
				<div className='collapse-content flex flex-wrap justify-center items-center gap-2'>
					{rooms.map((h) => (
						<RoomCardEdit r={h}></RoomCardEdit>
					))}
				</div>
			</div>
		</div>
	);
};

export default HotelCardEdit;
