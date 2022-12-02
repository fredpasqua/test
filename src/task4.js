import { useEffect } from "react";
import { useState } from "react";
import UserBox from "./userBox.jsx";
export default function Task4() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  const apiGET = () => {
    fetch("https://dummyjson.com/users?limit=100")
      .then((res) => res.json())
      .then((json) => setUsers(json.users));
  };
  useEffect(() => apiGET, []);

  const filteredUsers = users.filter((user) => {
    return (
      user.firstName.toLowerCase().includes(query.toLowerCase()) ||
      user.lastName.toLowerCase().includes(query.toLowerCase())
    );
  });

  return (
    <>
      <div>
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          placeholder="Search Names"
        ></input>
        <div>
          <ul className="boxListItems">
            {filteredUsers < 1 ? (
              <h2>No known user with that name</h2>
            ) : (
              filteredUsers.map((user) => (
                <li key={user.id}>
                  <UserBox
                    name={user.firstName + " " + user.lastName}
                    image={user.image}
                    streetAddress={user.address}
                    manufDate={user.birthDate}
                    title={"placeholder"}
                    email={user.email}
                  />
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
