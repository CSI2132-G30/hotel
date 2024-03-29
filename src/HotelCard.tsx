import RoomCard from "./RoomCard";

export default function () {
  return (
    <div className="justify-center flex gap-6">
      <div className="card w-4/5 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">Hotel Name</h2>
          <div className="card-actions">
            <RoomCard />
          </div>
        </div>
      </div>
    </div>
  );
}
