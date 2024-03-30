import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { onChange } from "../utils/event";
import axios from "axios";

export default function Login() {
	const [username, setusername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [handledLogin, setHandledLogin] = useState(false);
	const [admin, setAdmin] = useState(false);

	// check if user is already logged in
	useEffect(() => {
		if (localStorage.getItem("token")) {
			setHandledLogin(true);
		}
	}, []);

	async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		let response;
		if (admin) {
			console.log(error);
			response = await axios.post(
				`http://localhost:4040/users/employees/login?username=${username}&password=${password}`
			);
		} else {
			response = await axios.post(
				`http://localhost:4040/users/customers/login?username=${username}&password=${password}`
			);
		}
		const data = await response.data;
		if (data.error) {
			setError(data.error);
		} else {
			localStorage.setItem("token", JSON.stringify(data));
			localStorage.setItem("admin", admin.toString());
			setHandledLogin(true);
			location.reload();
		}
	}

	if (handledLogin) {
		return <Navigate to='/bookings' />;
	}

	return (
		<>
			<div className='w-screen h-[calc(57rem-268px)] flex items-center justify-center'>
				<div className='bg-slate-100 w-96 h-3/4 rounded-md border-2'>
					<form
						onSubmit={handleLogin}
						className='h-20 w-fill flex items-center justify-top flex-col'>
						<div className='pt-6'>
							<span className='text-3xl text-black'> Login </span>
						</div>
						<div className='w-full pt-4 pl-6'>
							<div className='justify-items-start'>Username</div>
						</div>
						<div className='w-full pl-6 pr-6'>
							<input
								type='text'
								name='username'
								className='input w-full bg-white'
								value={username}
								required
								onChange={onChange(setusername)}
							/>
						</div>
						<div className='w-full pt-6 pl-6'>
							<div className='justify-items-start'>Password</div>
						</div>
						<div className='w-full pl-6 pr-6'>
							<input
								type='password'
								name='password'
								className='input w-full bg-white'
								value={password}
								required
								onChange={onChange(setPassword)}
							/>
						</div>
						<div className='pt-6 pl-6 pr-6 w-full items-center flex flex-col justify-items-center justify-center flex-wrap'>
							<button
								type='submit'
								name='register_user'
								className='btn btn-s w-full rounded-3xl'
								onClick={() => setAdmin(false)}>
								Login as User
							</button>
							<button
								type='submit'
								name='register_admin'
								className='btn btn-s w-full rounded-3xl mt-4'
								onClick={() => setAdmin(true)}>
								Login as Employee
							</button>
							<div className="divider divider-neutral w-full h-2">OR</div> 
							<a className="btn btn-s w-full rounded-3xl" href="/register">
								Register an Account
							</a>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
