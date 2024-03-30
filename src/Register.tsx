import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function Register() {
  const [ssn, setSSN] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
	const [handledLogin, setHandledLogin] = useState(false);

  async function createUser(
    ssn: string,
    name: string,
    username: string,
    password: string
  ) {
    await axios.post(
      `http://localhost:4040/users/customers/create?ssn=${ssn}&name=${name}&username=${username}&password=${password}`
    );
    let response;
		
			response = await axios.post(
				`http://localhost:4040/users/customers/login?username=${username}&password=${password}`
			);
		
		const data = await response.data;
		if (data.error) {
			setError(data.error);
      return error
		} else {
			localStorage.setItem("token", JSON.stringify(data));
			localStorage.setItem("admin", "false");
			setHandledLogin(true);
		}
	}

	if (handledLogin) {
		return <Navigate to='/bookings' />;
	}

    //localStorage.setItem("token", {});
    //localStorage.setItem("admin", "false");
    
  

  return (
    <>
      <div className="w-screen h-[calc(57rem-268px)] flex items-center justify-center">
        <div className="w-96 h-96 ">
          <form
            method="POST"
            className="h-20 w-fill flex items-center justify-top flex-col"
          >
            <div className="py-6">
              <span className="text-3xl text-white"> Create an Account! </span>
            </div>
            <div className="w-full pt4 pl-6">
              <div className="justify-items-start">SSN</div>
            </div>
            <div className="w-full pl-6 pr-6">
              <input
                value={ssn}
                onChange={(e) => {
                  setSSN(e.target.value);
                }}
                type="text"
                name="ssn"
                className="input w-full bg-slate-700"
              />
            </div>
            <div className="w-full pt4 pl-6">
              <div className="justify-items-start">Name</div>
            </div>
            <div className="w-full pl-6 pr-6">
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                type="text"
                name="name"
                className="input w-full bg-slate-700"
              />
            </div>
            <div className="w-full pt4 pl-6">
              <div className="justify-items-start">Username</div>
            </div>
            <div className="w-full pl-6 pr-6">
              <input
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                value={username}
                type="text"
                name="username"
                className="input w-full bg-slate-700"
              />
            </div>
            <div className="w-full pt-6 pl-6">
              <div className="justify-items-start">Password</div>
            </div>
            <div className="w-full pl-6 pr-6">
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                name="password"
                className="input w-full bg-slate-700"
              />
            </div>
            <div className="pt-6 pl-6 pr-6 w-full items-center flex justify-items-center justify-center flex-wrap">
              <div
                onClick={() => createUser(ssn, name, username, password)}
                className="btn btn-s w-full rounded-3xl"
              >
                Create
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
