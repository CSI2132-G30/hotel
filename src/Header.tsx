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
				<a className='btn btn-ghost text-xl'>Five Hotels Group</a>
			</div>
			<div className='flex-none'>
				<ul className='menu menu-horizontal px-1'>
					<li>
						<Link className='nav-link font-weight-bold' to={"/"}>
							Home
						</Link>
					</li>
					<li>
					{login
        ? <a onClick={handleLogoutClick} href="/">Logout</a>
        : <a href="/login">Login</a>
      }
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
