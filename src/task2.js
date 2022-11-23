import React from "react";
import { useState } from "react";

export default function Task2() {
  const [toggle, setToggle] = useState(false);

  let toggleIt = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <button
        onClick={toggleIt}
        style={{ backgroundColor: toggle ? "red" : "yellow" }}
      >
        Something
      </button>
    </div>
  );
}
