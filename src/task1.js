import React from "react";
import { useState } from "react";
export default function Task1() {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
    console.log("value is:", e.target.value);
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
        <textbox className="taskOneBox">{message}</textbox>

        <button onClick={clear}>Clear</button>
      </div>
    </>
  );
}
