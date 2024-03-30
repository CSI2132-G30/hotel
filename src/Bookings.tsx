import axios from "axios";
import { useEffect, useState } from "react";

export default function Bookings() {
	const [cities, setCities] = useState<City[]>([]);

	async function getCities() {
		try {
			const res = await axios.get("http://localhost:4040/hotels/city");
			// const data = await res.json();
			setCities(res.data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}
	useEffect(() => {
		getCities();
	}, []);
	return (
		<>
			<div className='flex-column text-center justify-center items-center'>
				<h1 className='text-center text-6xl py-8'>Book Now</h1>
			</div>
			<div className='flex items-center justify-center'>
				<div className='flex flex-row gap-4'>
					<select className='select select-bordered w-full max-w-xs'>
						<option disabled selected>
							Choose your location
						</option>
						<option>Ottawa</option>
						{cities.map((c) => (
							<option>{c.city}</option>
						))}
					</select>
					<div className='flex flex-row justify-center items-center gap-2'>
						<div>Start:</div>
						<input type='date' id='start' name='trip-start' />
						<div>End:</div>
						<input type='date' id='end' name='trip-end' />
					</div>
					<div className='form-control justify-center'>
						<label className='cursor-pointer label'>
							<span className='label-text px-2'>Sale</span>
							<input type='checkbox' className='checkbox checkbox-success' />
						</label>
					</div>
					<button className='btn btn-accent'>Search</button>
				</div>
			</div>
		</>
	);
}
