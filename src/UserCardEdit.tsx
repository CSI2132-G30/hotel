import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { onChange } from "../utils/event";

interface UserCardEditProps {
	u: User;
}

const UserCardEdit: React.FC<UserCardEditProps> = ({ u }) => {
	const [ssn, setSsn] = useState<string>(u.ssn);
	const [username, setUsername] = useState<string>(u.username);
	const [password, setPassword] = useState<string>(u.password);
	const [name, setName] = useState<string>(u.name);
	const [deleted, setDeleted] = useState<boolean>(false);

	async function updateuser() {
		console.log("update");
		var form = document.getElementById("myForm");
		function handleForm(event: any) {
			event.preventDefault();
		}
		form!.addEventListener("submit", handleForm);
		console.log("hi");
		try {
			await axios.patch(
				`http://localhost:4040/users/customers/${u.ssn}?name=${name}&username=${username}&password=${password}`,
				{
					name: name,
					username: username,
					password: password,
					ssn: u.ssn,
				}
			);
			console.log(
				`http://localhost:4040/users/customers/${name}/${username}/${password}/${u.ssn}`
			);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}

	async function deleteUser() {
		try {
			console.log("delete");
			await axios.delete(`http://localhost:4040/users/customers/${u.ssn}`);
			setDeleted(true);
			console.log("deleted");
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}

	return (
		<div
			className={
				deleted
					? "card w-96 bg-base-100 shadow-xl hidden"
					: "card w-96 bg-base-100 shadow-xl"
			}>
			<form className='card-body' id='myForm'>
				<h1 className='card-title'>SSN: {u.ssn}</h1>
				<h2>Name:</h2>
				<textarea
					className='textarea textarea-bordered'
					placeholder={u.name}
					value={name}
					onChange={onChange(setName)}></textarea>
				<h3>Username:</h3>
				<textarea
					className='textarea textarea-bordered'
					placeholder={u.username}
					value={username}
					onChange={onChange(setUsername)}></textarea>
				<p>Password:</p>
				<textarea
					className='textarea textarea-bordered'
					placeholder={u.password}
					value={password}
					onChange={onChange(setPassword)}></textarea>
				<div className='card-actions justify-end'>
					<button
						className='btn btn-primary'
						onClick={updateuser}
						type='button'>
						Update Parameters
					</button>
					<button className='btn btn-error' onClick={deleteUser} type='button'>
						Delete
					</button>
				</div>
			</form>
		</div>
	);
};

export default UserCardEdit;
