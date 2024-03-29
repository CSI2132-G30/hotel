export default function () {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-slate-400">First Last</h2>
        <div className="card-actions">
          <h1>SSN</h1>
          <div className="justify-end">
            <button className="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
