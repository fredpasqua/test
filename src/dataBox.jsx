import React, { useState } from "react";

export default function DataBox({ title, bgColor }) {
  // const [visible, setVisibility] = useState(true);
  // const handleOnClick = () => {
  //   setVisibility(!visible);
  // };

  return (
    <div
      className="elementBox"
      style={{
        backgroundColor: bgColor,
      }}
    >
      {title}
    </div>
  );
}
