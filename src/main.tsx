import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.tsx";
import App from "./App.tsx";
import Account from "./Account.tsx";
import Bookings from "./Bookings.tsx";
import Register from "./Register.tsx";
import Login from "./Login.tsx";
import ManageHotels from "./ManageHotels.tsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ManageUsers from "./ManageUsers.tsx";
import ManageBookings from "./ManageBookings.tsx";

/*Displays the App component*/
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route path='/' Component={App} />
				<Route path='/account' Component={Account} />
				<Route path='/register' Component={Register} />
				<Route path='/bookings' Component={Bookings} />
				<Route path='/login' Component={Login} />
				<Route path='/managehotels' Component={ManageHotels} />
				<Route path='/manageusers' Component={ManageUsers} />
				<Route path='/managebookings' Component={ManageBookings} />
			</Routes>
		</Router>
	</React.StrictMode>
);
