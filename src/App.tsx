//Based on code from: https://www.youtube.com/watch?v=qdCHEUaFhBk
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function App() {
	const [chains, setChains] = useState<Chain[]>([]);

	async function getChains() {
		try {
			const res = await axios.get(`http://localhost:4040/hotels/chains`);
			console.log(res.data);
			setChains(res.data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}

	useEffect(() => {
		getChains();
	}, []);

	return (
		<>
			<h1 className='text-center text-6xl py-8'>Five World Class Chains</h1>
			<div className='flex flex-wrap items-center justify-center gap-5'>
				{chains.map((chain) => (
					<Link to={"/bookings"} className='card w-96 h-96 shadow-2xl'>
						<figure>
							<img src={`/${chain.name}.jpg`} />
						</figure>
						<div className='card-body'>
							<h2 className='card-title'>{chain.name}</h2>
							<p>Number of hotels: {chain.num_hotels}</p>
							<p>{chain.hq_address}</p>
							<p>{chain.phone_num}</p>
							<p>{chain.email}</p>
							<div className='card-actions justify-end'></div>
						</div>
					</Link>
				))}
			</div>
		</>
	);
}
