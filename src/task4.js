import { useEffect } from "react";
import { useState } from "react";
import UserBox from "./userBox.jsx";
export default function Task4() {
  const [users, setUsers] = useState([]);
  const apiGET = () => {
    fetch("https://dummyjson.com/users/")
      .then((res) => res.json())
      .then((json) => setUsers(json));
  };
  useEffect(() => {
    apiGET();
  });
  console.log(users);
  return (
    <>
      <div>
        <div>
          <ul>
            {users.map((e) => (
              <li key={e.id}>
                <UserBox
                  name={e.firstName}
                  image={e.image}
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
