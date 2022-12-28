import React from "react";
import Select from "react-select";

export default function DropDown({ users, updateSelectedDepartment }) {
  //event handler calls function from app.js to update state of selectedDepartments
  const handleChange = (e) => {
    updateSelectedDepartment(e);
  };

  //create a variable to hold object to inject into departments array for clearing the selectedDepartment sort
  let reset = { value: "", label: "All Departments" };

  //creates departments variable for use by react.select component
  let departments = users
    .map((user) => ({
      value: user.company.department,
      label: user.company.department,
    }))

    .filter(
      (v, i, a) =>
        a.findIndex((v2) => JSON.stringify(v2) === JSON.stringify(v)) === i
    );
  departments.push(reset);

  //Alphabetize list of options for react.select component
  departments.sort((a, b) => (a.value > b.value ? 1 : -1));

  return (
    <div className="flex">
      <div className="search">
        <Select
          className="departments"
          options={departments}
          placeholder="All Departments"
          onChange={(e) => handleChange(e.value)}
        />
      </div>
    </div>
  );
}
