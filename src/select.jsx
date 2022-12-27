import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";

export default function DropDown({ users }) {
  let departments = users.map((user) => [
    { value: user.company.department, label: user.company.department },
  ]);

  return (
    <div className="departments">
      <Select options={departments} />
    </div>
  );
}
