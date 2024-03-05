import HotelCard from "./HotelCard";

export default function App() {
	return (
		<>
			<div className='flex-column text-center'>
				<h1 className='text-center text-6xl py-8'>
					Many Hotels to Choose From!
				</h1>
			</div>
			<div className='flex flex-wrap items-center justify-center gap-5 relative'>
				<HotelCard
					img={"/toronto.jpg"}
					name={"Toronto"}
					desc={"The stunning city"}
					link={"https://google.ca"}></HotelCard>
				<HotelCard
					img={"/montreal.jpg"}
					name={"Montreal"}
					desc={"The stunning city"}
					link={"https://google.ca"}></HotelCard>
				<HotelCard
					img={"/ottawa.jpg"}
					name={"Ottawa"}
					desc={"The stunning city"}
					link={"https://google.ca"}></HotelCard>
			</div>
		</>
	);
}
