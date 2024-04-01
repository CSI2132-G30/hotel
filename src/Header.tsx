import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header() {
	const [login, setHandledLogin] = useState(false);
	const [admin, setAdmin] = useState(false);
	useEffect(() => {
		if (localStorage.getItem("token")) {
			setHandledLogin(true);
		}
		if (JSON.parse(localStorage.getItem("admin")!)) {
			setAdmin(true);
		}
	}, []);

	function handleLogoutClick() {
		localStorage.clear();
		const navigate = useNavigate();
		navigate("/");
		location.reload();
	}

	return (
		<div className='navbar bg-base-100'>
			<div className='flex-1'>
				<Link to={"/"} className='btn btn-ghost text-xl'>
					Five Hotels Group
				</Link>
			</div>
			<div className='flex-none'>
				<ul className='menu menu-horizontal px-1'>
					<li>
						{login ? (
							<Link className='text-error' onClick={handleLogoutClick} to={"/"}>
								Logout
							</Link>
						) : (
							<Link className='text-success' to={"/login"}>
								Login
							</Link>
						)}
					</li>
					<li>
						<Link
							className={login ? "nav-link font-weight-bold" : " hidden"}
							to={"/account"}>
							My Bookings
						</Link>
					</li>
					<li>
						<Link
							className={login ? "nav-link font-weight-bold" : "hidden"}
							to={"/bookings"}>
							Book Now
						</Link>
					</li>
					<li>
						<Link
							className={admin ? "nav-link font-weight-bold" : "hidden"}
							to={"/managebookings"}>
							Manage Bookings
						</Link>
					</li>
					<li>
						<Link
							className={admin ? "nav-link font-weight-bold" : "hidden"}
							to={"/managehotels"}>
							Manage Hotels
						</Link>
					</li>
					<li>
						<Link
							className={admin ? "nav-link font-weight-bold" : "hidden"}
							to={"/manageusers"}>
							Manage Users
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
