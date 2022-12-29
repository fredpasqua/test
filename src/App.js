import "./App.scss";
import { useEffect, useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import UserBox from "./userBox.jsx";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import DropDown from "./select";
import { CircularProgress } from "react-loading-indicators";
function App() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [ignore, forceUpdate] = useReducer((x) => x + 1, 0);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  //Initialize Users on load
  useEffect(() => apiGET(), []);

  //Set the API url
  let apiURL = "https://dummyjson.com/users?limit=100";

  //FETCH users from DummyJson.com
  const apiGET = () => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((json) => setUsers(json.users));
    setIsLoading(false);
  };

  //Functions for sorting by names, first and last, by A-Z and Z-A; Mutates Users state.
  const sortFirstName = () => {
    users.sort((a, b) =>
      a.firstName.toUpperCase() > b.firstName.toUpperCase() ? 1 : -1
    );
    forceUpdate();
  };

  const sortFirstNameZA = () => {
    users.sort((a, b) =>
      a.firstName.toUpperCase() < b.firstName.toUpperCase() ? 1 : -1
    );
    forceUpdate();
  };

  const sortLastName = () => {
    users.sort((a, b) =>
      a.lastName.toUpperCase() > b.lastName.toUpperCase() ? 1 : -1
    );
    forceUpdate();
  };
  const sortLastNameZA = () => {
    users.sort((a, b) =>
      a.lastName.toUpperCase() < b.lastName.toUpperCase() ? 1 : -1
    );
    forceUpdate();
  };

  const clear = (e) => {
    setQuery("");
  };

  //creates a list of Users prefiltered by selectedDepartment state
  let preFilteredUsers = [];
  selectedDepartment.length > 0
    ? (preFilteredUsers = users.filter((user) => {
        return user.company.department
          .toLowerCase()
          .includes(selectedDepartment.toLowerCase());
      }))
    : (preFilteredUsers = users);

  //Search Bar Filter function takes the preFiltered array created by drop down selection and searches by name or title
  let filteredUsers = preFilteredUsers.filter((user) => {
    return (
      user.firstName.toLowerCase().includes(query.toLowerCase()) ||
      user.lastName.toLowerCase().includes(query.toLowerCase()) ||
      user.company.title.toLowerCase().includes(query.toLowerCase())
    );
  });

  //Drop Down Menu Calls this function to set state of SelecetedDepartments
  const updateSelectedDepartment = (e) => {
    setSelectedDepartment(e);
  };

  return (
    <>
      <div className="view">
        <div className="sortContainer">
          <div className="sortRight">
            <h1>Robots Directory</h1>
            <p>
              results match {filteredUsers.length} of {users.length} active
              robots
            </p>
            <a
              href="https://fredpasqua.github.io/my-portfolio/#project"
              className="portfolio-link"
            >
              RETURN TO PORTFOLIO
            </a>
          </div>
          <div className="searchBar">
            <input
              onChange={(event) => setQuery(event.target.value)}
              value={query}
              placeholder="search name or title"
            ></input>
            <div className="FontAwesome">
              <FontAwesomeIcon
                onClick={() => clear()}
                icon={faXmarkCircle}
                style={{
                  color: "#3794ca",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  height: "35px",
                  marginTop: "8px",
                }}
              />
            </div>
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
          <DropDown
            users={users}
            updateSelectedDepartment={updateSelectedDepartment}
          />
        </div>
        {!isLoading ? (
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
        ) : (
          <CircularProgress
            variant="bubble-dotted"
            color="#5320bd"
            size="medium"
            text=""
            textColor="#581890"
          />
        )}
      </div>
    </>
  );
}

export default App;