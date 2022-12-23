import React, { useEffect, useState } from "react";

function DropdownMenu(departments) {
  // Declare a state variable to hold the list of elements
  const [elements, setElements] = useState(departments);
  console.log(elements);
  // Render the dropdown menu
  return (
    <select>
      {/* {elements.map((element) => (
        <option key={element.id}>{element.firstName}</option>
      ))} */}
    </select>
  );
}

export default DropdownMenu;
