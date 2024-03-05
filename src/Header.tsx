export default function Header() {
	return (
		<div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Five Hotels Group</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li><a>About</a></li>
                <li>
                    <details>
                    <summary>
                        Book Now
                    </summary>
                    <ul className="p-2 bg-base-100 rounded-t-none">
                        <li><a>Montreal</a></li>
                        <li><a>Toronto</a></li>
                        <li><a>Ottawa</a></li>
                    </ul>
                    </details>
                </li>
                </ul>
            </div>
        </div>
	);
}