import axios from "axios";
import moment from "moment";
import { useState } from "react";

interface BookingCardEditProps {
	b: Booking;
}

const BookingCardEdit: React.FC<BookingCardEditProps> = ({ b }) => {
	return (
		<div className='card w-96 bg-base-100 shadow-xl'>
			<div className='card-body'>
                <h1 className='card-title'>Room ID</h1>
                <textarea className="textarea textarea-bordered" placeholder={b.room_id.toString()}></textarea>
				<h2>CustomerID:</h2>
				<textarea className="textarea textarea-bordered" placeholder={b.customer_id.toString()}></textarea>
				<h3>Start Date:</h3>
				<textarea className="textarea textarea-bordered" placeholder={b.start_date.toUTCString()}></textarea>
				<p>End Date:</p>
				<textarea className="textarea textarea-bordered" placeholder={b.end_date.toUTCString()}></textarea>
				<p>Checked in?:</p>
				<textarea className="textarea textarea-bordered" placeholder={b.checked_in.toString()}></textarea>
				<div className='card-actions justify-end'>
					<button className='btn btn-primary'>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default BookingCardEdit;
