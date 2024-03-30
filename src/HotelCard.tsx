import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import axios from "axios";

export default function HotelCard({ h }: { h: Hotel }) {
	const [rooms, setRooms] = useState<Room[]>([]);

	async function getRooms() {
		try {
			const res = await axios.get(
				`http://localhost:4040/hotels/rooms?hotel=${h.id}`
			);
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
				<div className='collapse-content flex flex-col justify-center items-center gap-2'>
					{rooms.map((r) => (
						<RoomCard r={r}></RoomCard>
					))}
				</div>
			</div>
		</div>
	);
}
