export default function RoomCard() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-slate-400">Room Number</h2>
        <div className="card-actions">
          <div className="badge badge-outline">Wi-Fi</div>
          <div className="badge badge-outline">Internet</div>
          <div>
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
