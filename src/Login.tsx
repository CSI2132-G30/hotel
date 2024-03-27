import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { onChange } from "../utils/event";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [handledLogin, setHandledLogin] = useState(false);
  const [admin, setAdmin] = useState(false);

  // check if user is already logged in
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setHandledLogin(true);
    }
  }, []);

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await fetch("http://localhost:3000/hotels/login", {
      // make a route for this
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email, // change parameters to fit schema
        password,
        admin,
      }),
    });
    const data = await response.json();
    if (data.error) {
      setError(data.error);
    } else {
      localStorage.setItem("token", data.token);
      setHandledLogin(true);
    }
  }

  if (handledLogin) {
    return <Navigate to="/bookings" />;
  }

  return (
    <>
      <div className="w-screen h-[calc(57rem-268px)] flex items-center justify-center">
        <div className="bg-slate-100 w-96 h-96 rounded-md border-2">
          <form
            onSubmit={handleLogin}
            className="h-20 w-fill flex items-center justify-top flex-col"
          >
            <div className="pt-6">
              <span className="text-3xl text-black"> Login </span>
            </div>
            <div className="w-full pt4 pl-6">
              <div className="justify-items-start">Username</div>
            </div>
            <div className="w-full pl-6 pr-6">
              <input
                type="text"
                name="username"
                className="input w-full bg-white"
                value={email}
                required
                onChange={onChange(setEmail)}
              />
            </div>
            <div className="w-full pt-6 pl-6">
              <div className="justify-items-start">Password</div>
            </div>
            <div className="w-full pl-6 pr-6">
              <input
                type="password"
                name="password"
                className="input w-full bg-white"
                value={password}
                required
                onChange={onChange(setPassword)}
              />
            </div>
            <div className="pt-6 pl-6 pr-6 w-full items-center flex justify-items-center justify-center flex-wrap">
              <button
                type="submit"
                name="register_user"
                className="btn btn-s w-full rounded-3xl"
                onClick={() => setAdmin(false)}
              >
                Login as User
              </button>
              <button
                type="submit"
                name="register_admin"
                className="btn btn-s w-full rounded-3xl mt-4"
                onClick={() => setAdmin(true)}
              >
                Login as Employee
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
