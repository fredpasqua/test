import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";

export default function DropDown({ users }) {
  let departments = users.map((user) => ({
    value: user.company.department,
    label: user.company.department,
  }));

  let filteredDepartments = departments.filter(
    (v, i, a) =>
      a.findIndex((v2) => JSON.stringify(v2) === JSON.stringify(v)) === i
  );

  console.log(filteredDepartments);
  return (
    <div className="departments">
      <Select options={filteredDepartments} />
    </div>
  );
}
