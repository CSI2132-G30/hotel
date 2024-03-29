import UserCard from "./UserCard";

export default function () {
  return (
    <div className="justify-center flex gap-6 flex-wrap">
      <div className="card w-4/5 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">Customers</h2>
          <div className="card-actions">
            <UserCard />
          </div>
        </div>
      </div>
      <div className="card w-4/5 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">Employees</h2>
          <div className="card-actions">
            <UserCard />
          </div>
        </div>
      </div>
    </div>
  );
}
