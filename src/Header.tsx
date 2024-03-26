import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div className='navbar bg-base-100'>
			<div className='flex-1'>
				<a className='btn btn-ghost text-xl'>Five Hotels Group</a>
			</div>
			<div className='flex-none'>
				<ul className='menu menu-horizontal px-1'>
					<li>
						<a><Link className="nav-link font-weight-bold" to={`/`}>Home</Link></a>
					</li>
					<li>
						<a><Link className="nav-link font-weight-bold" to={`/account`}>Account</Link></a>
					</li>
					<li>
						<a><Link className="nav-link font-weight-bold" to={`/bookings`}>Book Now</Link></a>
					</li>
				</ul>
			</div>
		</div>
	);
}