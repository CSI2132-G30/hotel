import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import axios from "axios";

interface HotelCardProps {
	h: Hotel;
	startDate: string;
	endDate: string;
}

const HotelCard: React.FC<HotelCardProps> = ({ h, startDate, endDate }) => {
	const [rooms, setRooms] = useState<Room[]>([]);
	const [average, setAverage] = useState<number>();

	async function getRooms() {
		try {
			const res = await axios.get(
				`http://localhost:4040/hotels/search?hotel=${h.id}&end_date=${endDate}&start_date=${startDate}`
			);
			setRooms(res.data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}
	async function getAverage() {
		try {
			const res = await axios.get(
				`http://localhost:4040/hotels/average/${h.id}`
			);
			setAverage(res.data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}

	useEffect(() => {
		getRooms();
		getAverage();
	}, [startDate, endDate]);
	return (
		<div className='flex flex-row justify-center items-center w-full'>
			<div className='collapse bg-base-200'>
				<input type='checkbox' className='peer' />
				<div className='collapse-title border border-base-300 bg-base-200 '>
					<span className=' text-yellow-300'>{h.stars} </span> {h.name}, Average
					Average Price: {Math.round((average ?? 500) * 100) / 100}
				</div>

				<div className='collapse-content flex flex-col justify-center items-center gap-2'>
					{rooms.map((r) => (
						<RoomCard r={r} startDate={startDate} endDate={endDate}></RoomCard>
					))}
				</div>
			</div>
		</div>
	);
};

export default HotelCard;
