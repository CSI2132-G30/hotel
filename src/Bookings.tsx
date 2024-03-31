import axios from "axios";
import { useEffect, useState } from "react";
import HotelCard from "./HotelCard";

export default function Bookings() {
	const [cities, setCities] = useState<City[]>([]);
	const [city, setCity] = useState<string>("Ottawa");
	const [startDate, setStartDate] = useState<string>("");
	const [endDate, setEndDate] = useState<string>("");
	const [hotels, setHotels] = useState<Hotel[]>([]);

	async function getCities() {
		try {
			const res = await axios.get("http://localhost:4040/hotels/city");
			setCities(res.data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}

	async function getHotels() {
		try {
			const res = await axios.get(`http://localhost:4040/hotels/city/${city}`);
			setHotels(res.data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}

	useEffect(() => {
		getCities();
	}, []);
	return (
		<>
			<div className='flex-column text-center justify-center items-center align-middle'>
				<h1 className='text-center text-6xl py-8'>Book Now</h1>
				<div className='flex items-center justify-center align-middle'>
					<div className='flex flex-row gap-4'>
						<select
							className='select select-bordered w-full max-w-xs'
							value={city}
							onChange={(v) => setCity(v.target.value)}>
							{cities.map((c) => (
								<option>{c.city}</option>
							))}
						</select>
						<div className='flex flex-row justify-center items-center gap-2'>
							<div>Start:</div>
							<input
								type='date'
								value={startDate}
								onChange={(v) => {
									setStartDate(v.target.value);
								}}
							/>
							<div>End:</div>
							<input
								type='date'
								value={endDate}
								onChange={(v) => {
									setEndDate(v.target.value);
								}}
							/>
						</div>
						<div className='form-control justify-center'>
							<label className='cursor-pointer label'>
								<span className='label-text px-2'>Sale</span>
								<input type='checkbox' className='checkbox checkbox-success' />
							</label>
						</div>
						<button className='btn btn-accent' onClick={getHotels}>
							Search
						</button>
					</div>
				</div>
				<div className='w-full flex justify-center pt-6'>
					<div className='w-1/2 flex flex-col gap-2 align-middle justify-center items-center'>
						{hotels.map((c) => (
							<HotelCard
								h={c}
								startDate={startDate}
								endDate={endDate}></HotelCard>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
