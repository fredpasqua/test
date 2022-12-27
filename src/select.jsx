import React from "react";

import Select from "react-select";

export default function DropDown({ users }) {
  let departments = users
    .map((user) => ({
      value: user.company.department,
      label: user.company.department,
    }))
    .filter(
      (v, i, a) =>
        a.findIndex((v2) => JSON.stringify(v2) === JSON.stringify(v)) === i
    );

  return (
    <div className="departments">
      Search by department
      <Select options={departments} />
    </div>
  );
}
