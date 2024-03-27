//Based on code from: https://www.youtube.com/watch?v=qdCHEUaFhBk
import { useState, useEffect } from "react";

export default function App() {
	const [chains, setChains] = useState<Chain[]>([]);

	useEffect(() => {
		fetch("http://localhost:4040/hotels/chains")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setChains(data);
			});
	}, []);

	return (
		<>
			<div className='flex-column text-center'>
				<h1 className='text-center text-6xl py-8'>Five World Class Chains</h1>
			</div>
			<div className='flex flex-wrap items-center justify-center gap-5 relative'>
				{chains &&
					chains.map((chain) => (
						<a
							key={chain.id}
							className='card hover:scale-105 transition-all duration-300'>
							<div className='card w-96 h-96 shadow-xl'>
								<figure>
									<img src={"/" + chain.name + ".jpg"} />
								</figure>
								<div className='card-body'>
									<h2 className='card-title'>{chain.name}</h2>
									<p>Number of hotels: {chain.num_hotels}</p>
									<p>{chain.hq_address}</p>
									<p>{chain.phone_num}</p>
									<p>{chain.email}</p>
									<div className='card-actions justify-end'></div>
								</div>
							</div>
						</a>
					))}
			</div>
		</>
	);
}
