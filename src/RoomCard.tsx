function RoomCard({ r }: { r: Room }): JSX.Element {
	return (
		<div className='card w-96 bg-base-100 shadow-xl'>
			<div className='card-body'>
				<h1 className='card-title'>Room Number: {r.number}</h1>
				<h2>Price: {r.price}</h2>
				<h3>Capacity: {r.capacity}</h3>
				<p>{r.view}</p>
				<p>Amenities: {r.amenities.join(", ")}</p>
				<div className='card-actions justify-end'>
					<button className='btn btn-primary'>Book Now</button>
				</div>
			</div>
		</div>
	);
}

export default RoomCard;
