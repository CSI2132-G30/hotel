import HotelCardBookingsEdit from "./HotelCardBookingsEdit";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ManageHotels() {

    const [hotels, setHotels] = useState<Hotel[]>([]);

    async function getHotels() {
		try {
			const res = await axios.get(`http://localhost:4040/hotels/`);
			setHotels(res.data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}

    useEffect(() => {
        getHotels();
	}, []);

    return (
        hotels.map((c) => (
            <HotelCardBookingsEdit h={c}></HotelCardBookingsEdit>
        )
    )
    );
}