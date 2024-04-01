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
		if (localStorage.getItem("admin")) {
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
							<Link className = "text-error" onClick={handleLogoutClick} to={"/"}>
								Logout
							</Link>
						) : (
							<a className = "text-success" href='/login'>Login</a>
						)}
					</li>
					<li>
						<Link className='nav-link font-weight-bold' to={"/account"}>
							My Bookings
						</Link>
					</li>
					<li>
						<Link className='nav-link font-weight-bold' to={"/bookings"}>
							Book Now
						</Link>
					</li>
					<li>
						<Link className={admin ? 'nav-link font-weight-bold' : 'nav-link btn-error btn-disabled'} to={"/managebookings"}>
							Manage Bookings
						</Link>
					</li>
						<li>
						<Link className={admin ? 'nav-link font-weight-bold' : 'nav-link btn-error btn-disabled'} to={"/managehotels"}>
							Manage Rooms
						</Link>
						</li>
						<li>
						<Link className={admin ? 'nav-link font-weight-bold' : 'nav-link btn-error btn-disabled'} to={"/manageusers"}>
							Manage Users
						</Link>
						</li>
					
					
				</ul>
			</div>
		</div>
	);
}
