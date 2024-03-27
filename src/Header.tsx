import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Five Hotels Group</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="nav-link font-weight-bold" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link font-weight-bold" href="/account">
              Account
            </a>
          </li>
          <li>
            <a className="nav-link font-weight-bold" href="/bookings">
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
