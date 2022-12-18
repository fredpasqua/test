import { useEffect, useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import UserBox from "./userBox.jsx";
export default function Task4() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [ignore, forceUpdate] = useReducer((x) => x + 1, 0);
  const apiGET = () => {
    fetch("https://dummyjson.com/users?limit=100")
      .then((res) => res.json())
      .then((json) => setUsers(json.users));
  };

  const sortFirstName = () => {
    setUsers(
      users.sort(
        (a, b) => a.firstName.toUpperCase() > b.firstName.toUpperCase()
      )
    );
    forceUpdate();
  };
  const sortLastName = () => {
    setUsers(
      users.sort((a, b) => a.lastName.toUpperCase() > b.lastName.toUpperCase())
    );
    forceUpdate();
  };
  const clear = (e) => {
    setQuery("");
  };

  //Initialize Users on load
  useEffect(() => apiGET, []);

  //Search Bar Filter function
  let filteredUsers = users.filter((user) => {
    return (
      user.firstName.toLowerCase().includes(query.toLowerCase()) ||
      user.lastName.toLowerCase().includes(query.toLowerCase()) ||
      user.company.title.toLowerCase().includes(query.toLowerCase())
    );
  });

  //Icon for search bar
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
          <div className="sortButtonsContainer">
            {!query ? null : (
              <button className="userButton" onClick={clear}>
                Clear Search
              </button>
            )}
            <button
              className="userButton"
              onClick={() => {
                sortFirstName();
              }}
            >
              Sort First A-Z
            </button>
            <button
              className="userButton"
              onClick={() => {
                sortLastName();
              }}
            >
              Sort Last A-Z Name
            </button>
          </div>
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
