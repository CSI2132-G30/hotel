export default function App() {
	return (
		<body className = 'bg-white fill'>
			<h1>
				Five Chains
			</h1>
			<h1>
				Fourteen Locations
			</h1>
			<h1>
				Three Amazing Cities
			</h1>
			<div className="card w-96 bg-base-100 shadow-xl">
				<figure><img src="images/montreal.jpg" alt="Shoes" /></figure>
				<div className="card-body">
					<h2 className="card-title">Montreal</h2>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">View Hotels</button>
					</div>
				</div>
			</div>
			<div className="card w-96 bg-base-100 shadow-xl">
				<figure><img src="images/toronto.jpg" alt="Shoes" /></figure>
				<div className="card-body">
					<h2 className="card-title">Toronto</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">View Hotels</button>
					</div>
				</div>
			</div>
			<div className="card w-96 bg-base-100 shadow-xl">
				<figure><img src="images/ottawa.jpg" alt="Shoes" /></figure>
				<div className="card-body">
					<h2 className="card-title">Ottawa</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">View Hotels</button>
					</div>
				</div>
			</div>
		</body>
	);
}
