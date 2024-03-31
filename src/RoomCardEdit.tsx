import axios from "axios";
import { useNavigate } from "react-router-dom";

interface RoomCardEditProps {
	r: Room;
}

const RoomCardEdit: React.FC<RoomCardEditProps> = ({ r }) => {
	return (
		<div className='card w-96 bg-base-100 shadow-xl'>
			<div className='card-body'>
				<h1 className='card-title'>Room Number: {r.number}</h1>
				<h2>Price:</h2>
				<textarea
					className='textarea textarea-bordered'
					placeholder={r.price.toString()}></textarea>
				<h3>Capacity:</h3>
				<textarea
					className='textarea textarea-bordered'
					placeholder={r.capacity.toString()}></textarea>
				<p>View:</p>
				<textarea
					className='textarea textarea-bordered'
					placeholder={r.view}></textarea>
				<p>Amenities:</p>
				<textarea
					className='textarea textarea-bordered'
					placeholder={r.amenities.join(", ")}></textarea>
				<div className='card-actions justify-end'>
					<button className='btn btn-primary'>Delete</button>
				</div>
			</div>
		</div>
	);
};

export default RoomCardEdit;
