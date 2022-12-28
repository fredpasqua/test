import React from "react";
import Select from "react-select";

export default function DropDown({ users, updateSelectedDepartment }) {
  const handleChange = (e) => {
    updateSelectedDepartment(e);
  };
  let reset = { value: "", label: "All Departments" };
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
  departments.sort((a, b) => a - b);

  return (
    <div className="flex">
      <div className="search">
        Search by Department
        <Select
          className="departments"
          options={departments}
          value="null"
          onChange={(e) => handleChange(e.value)}
        />
      </div>
    </div>
  );
}
