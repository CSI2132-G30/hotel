import { useEffect, useState } from "react";
import BookingCardEdit from "./BookingCardEdit";
import axios from "axios";

interface HotelCardBookingsEditProps {
	h: Hotel;
}

const HotelCardBookingsEdit: React.FC<HotelCardBookingsEditProps> = ({ h }) => {
	const [bookings, setBookings] = useState<Booking[]>([]);

	async function getBookings() {
		try {
			console.log(
				`http://localhost:4040/hotels/bookings?hotel=${h.id}`
			);
			const res = await axios.get(
				`http://localhost:4040/hotels/bookings?hotel=${h.id}`
			);
			setBookings(res.data);
            console.log(res.data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}
	useEffect(() => {
		getBookings();
	}, []);
	return (
		<div className='flex flex-row justify-center items-center w-full'>
			<div className='collapse bg-base-200'>
				<input type='checkbox' className='peer' />
				<div className='collapse-title border border-base-300 bg-base-200 '>
					{h.name}
				</div>
				<div className='collapse-content flex flex-wrap justify-center items-center gap-2'>
					{bookings.map((h) => (
						<BookingCardEdit b={h}></BookingCardEdit>
					))}
				</div>
			</div>
		</div>
	);
};

export default HotelCardBookingsEdit;
