import { useEffect, useState } from "react";
import UserCardEdit from "./UserCardEdit";
import axios from "axios";

export default function () {

  const [users, setUsers] = useState<User[]>([]);
  const [employees, setEmployees] = useState<User[]>([]);

    async function getUsers() {
		try {
			const res = await axios.get(`http://localhost:4040/users/customers`);
      const res2 = await axios.get(`http://localhost:4040/users/employees`);
			setUsers(res.data);
      setEmployees(res2.data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}


    useEffect(() => {
        getUsers();
	}, []);


  return (
    <>
    <h1 className="hero text-3xl p-8">USERS</h1>
    <div className="flex flex-wrap justify-center gap-4">
      {users.map((u) => (
          <UserCardEdit u={u}></UserCardEdit>
      ))},
      </div>
      <h1 className="hero text-3xl p-8">EMPLOYEES</h1>
      <div className="flex flex-wrap justify-center gap-4">
      {employees.map((e) => (
          <UserCardEdit u={e}></UserCardEdit>
      ))},
      </div>
      </>
  );
}
