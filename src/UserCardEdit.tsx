import axios from "axios";
import { useNavigate } from "react-router-dom";

interface UserCardEditProps {
	u: User;
}

const UserCardEdit: React.FC<UserCardEditProps> = ({ u }) => {
	return (
		<div className='card w-96 bg-base-100 shadow-xl'>
			<div className='card-body'>
				<h1 className='card-title'>Name: {u.name}</h1>
				<h2>SSN:</h2>
				<textarea
					className='textarea textarea-bordered'
					placeholder={u.ssn}></textarea>
				<h3>Username:</h3>
				<textarea
					className='textarea textarea-bordered'
					placeholder={u.username}></textarea>
				<p>Password:</p>
				<textarea
					className='textarea textarea-bordered'
					placeholder={u.password}></textarea>
				<div className='card-actions justify-end'>
					<button className='btn btn-primary'>Delete</button>
				</div>
			</div>
		</div>
	);
};

export default UserCardEdit;
