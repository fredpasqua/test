import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import UserBox from "./userBox.jsx";
export default function Task4() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  const apiGET = () => {
    fetch("https://dummyjson.com/users?limit=100")
      .then((res) => res.json())
      .then((json) =>
        setUsers(
          json.users.sort(function (a, b) {
            if (a.lastName < b.lastName) {
              return -1;
            }
            if (a.lastName > b.lastName) {
              return 1;
            }
            return 0;
          })
        )
      );
  };
  const apiGET2 = () => {
    fetch("https://dummyjson.com/users?limit=100")
      .then((res) => res.json())
      .then((json) =>
        setUsers(
          json.users.sort(function (a, b) {
            if (a.firstName < b.firstName) {
              return -1;
            }
            if (a.firstName > b.firstName) {
              return 1;
            }
            return 0;
          })
        )
      );
  };
  useEffect(() => apiGET, []);
  //Search Bar Filter
  let filteredUsers = users.filter((user) => {
    return (
      user.firstName.toLowerCase().includes(query.toLowerCase()) ||
      user.lastName.toLowerCase().includes(query.toLowerCase()) ||
      user.company.title.toLowerCase().includes(query.toLowerCase())
    );
  });
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;

  return (
    <>
      <div className="directoryContainer">
        <h1>Robots Company Directory</h1>
        <p>
          results match {filteredUsers.length} of {users.length} active robots
        </p>
        <div className="sortContainer">
          <div className="searchBar">
            <input
              onChange={(event) => setQuery(event.target.value)}
              value={query}
              placeholder="search name or title"
            ></input>

            <div className="userSearchIcon">{searchIcon}</div>
          </div>{" "}
          <button
            className="userDetailsButton"
            onClick={() => {
              apiGET2();
            }}
          >
            Sort First A-Z
          </button>
          <button
            className="userDetailsButton"
            onClick={() => {
              apiGET();
            }}
          >
            Sort Last A-Z Name
          </button>
        </div>

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
                    title={"placeholder"}
                    email={user.email}
                    user={user}
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
