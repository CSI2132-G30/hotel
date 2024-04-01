import axios from "axios";
import { useEffect, useState } from "react";
import HotelCard from "./HotelCard";

export default function Bookings() {
	const [cities, setCities] = useState<City[]>([]);
	const [luxury, setLuxury] = useState<boolean>(false);
	const [city, setCity] = useState<string>("Ottawa");
	const [startDate, setStartDate] = useState<string>("");
	const [endDate, setEndDate] = useState<string>("");
	const [hotels, setHotels] = useState<Hotel[]>([]);
	const [admin, setAdmin] = useState(false);
	const [customers, setCustomers] = useState<User[]>([]);
	const [customer_id, setCustomer_id] = useState<string>("111 111 111");

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
			const res = await axios.get(
				luxury
					? `http://localhost:4040/hotels/luxury/${city}`
					: `http://localhost:4040/hotels/city/${city}`
			);
			setHotels(res.data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}

	async function getCustomers() {
		try {
			const res = await axios.get(`http://localhost:4040/users/customers`);
			setCustomers(res.data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}

	useEffect(() => {
		if (JSON.parse(localStorage.getItem("admin")!)) {
			setAdmin(true);
			localStorage.setItem("customerID", customer_id);
		} else {
			localStorage.setItem(
				"customerID",
				JSON.parse(localStorage.getItem("token")!).ssn
			);
		}

		getCustomers();
		getCities();
	}, []);
	return (
		<>
			<div className='flex-column text-center justify-center items-center align-middle'>
				<h1 className='text-center text-6xl py-8'>Book Now</h1>
				<div className={admin ? "" : "hidden"}>
					{" "}
					<span className='pr-2'>Select Customer:</span>
					<select
						className='select select-bordered'
						value={customer_id}
						onChange={(v) => {
							setCustomer_id(v.target.value);
							localStorage.setItem("customerID", v.target.value);
						}}>
						{customers.map((c) => (
							<option>{c.ssn}</option>
						))}
					</select>
				</div>
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
								<span className='label-text px-2'>Luxury</span>
								<input
									type='checkbox'
									className='checkbox checkbox-success'
									checked={luxury}
									onChange={() => setLuxury(!luxury)}
								/>
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
