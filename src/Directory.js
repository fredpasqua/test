import { useEffect, useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import UserBox from "./userBox.jsx";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

export default function Directory() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [ignore, forceUpdate] = useReducer((x) => x + 1, 0);
  let apiURL1 = "https://dummyjson.com/users?limit=100";
  // let apiURL2 = "https://dummyapi.io/data/v1/user?page=1&limit=10";
  const apiGET = () => {
    fetch(apiURL1)
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
  const sortFirstNameZA = () => {
    setUsers(
      users.sort(
        (a, b) => a.firstName.toUpperCase() < b.firstName.toUpperCase()
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
  const sortLastNameZA = () => {
    setUsers(
      users.sort((a, b) => a.lastName.toUpperCase() < b.lastName.toUpperCase())
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
      <div className="sortContainer">
        <div className="sortRight">
          <h1>Robots Company Directory</h1>
          <p>
            results match {filteredUsers.length} of {users.length} active robots
          </p>
        </div>
        <div className="searchBar">
          <input
            onChange={(event) => setQuery(event.target.value)}
            value={query}
            placeholder="search name or title"
          ></input>
          <FontAwesomeIcon
            onClick={() => clear()}
            icon={faXmarkCircle}
            className="cancelCircle"
            style={{}}
          />
        </div>{" "}
        <div className="sortButtonsContainer">
          <button
            className="userButton"
            onClick={() => {
              sortFirstName();
            }}
          >
            First A-Z
          </button>
          <button
            className="userButton"
            onClick={() => {
              sortFirstNameZA();
            }}
          >
            First Z-A
          </button>
          <button
            className="userButton"
            onClick={() => {
              sortLastName();
            }}
          >
            Last A-Z
          </button>
          <button
            className="userButton"
            onClick={() => {
              sortLastNameZA();
            }}
          >
            Last Z-A
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
    </>
  );
}
