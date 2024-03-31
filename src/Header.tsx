import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
	const [login, setHandledLogin] = useState(false);
	useEffect(() => {
		if (localStorage.getItem("token")) {
			setHandledLogin(true);
		}
	}, []);

	function handleLogoutClick() {
		localStorage.clear();
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
							<Link onClick={handleLogoutClick} to={"/"}>
								Logout
							</Link>
						) : (
							<a href='/login'>Login</a>
						)}
					</li>
					<li>
						<Link className='nav-link font-weight-bold' to={"/account"}>
							Account
						</Link>
					</li>
					<li>
						<Link className='nav-link font-weight-bold' to={"/bookings"}>
							Book Now
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
