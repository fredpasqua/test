import React from "react";
import { useState } from "react";
export default function Task1() {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const clear = (e) => {
    setMessage("");
  };
  return (
    <>
      <div className="taskOne">
        <input
          type="text"
          id="message"
          name="message"
          onChange={handleChange}
          value={message}
        />
        <div className="taskOneBox">{message.toUpperCase()}</div>

        <button className="clearButton" onClick={clear}>
          Clear
        </button>
      </div>
    </>
  );
}
