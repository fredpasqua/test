import { useEffect } from "react";
import { useState } from "react";
import UserBox from "./userBox.jsx";
export default function Task4() {
  const [users, setUsers] = useState([]);
  const apiGET = () => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((json) => setUsers(json.users));
  };
  useEffect(() => apiGET, []);
  console.log(users);
  return (
    <>
      <div>
        <div>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <UserBox
                  key={user.id}
                  name={user.firstName + " " + user.lastName}
                  image={user.image}
                  title={"placeholder"}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
