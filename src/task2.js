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
        className="task2Button"
        onClick={toggleIt}
        style={{ backgroundColor: toggle ? "red" : "yellow" }}
      />

      <button
        className="task2Button"
        onClick={toggleIt}
        style={{ backgroundColor: toggle ? "yellow" : "red" }}
      />
    </div>
  );
}
