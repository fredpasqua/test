import React, { useState } from "react";

export default function DataBox({ title, bgColor, display }) {
  const [visible, setVisibility] = useState(true);
  const handleOnClick = () => {
    setVisibility(!visible);
  };

  return (
    <div
      className="elementBox"
      style={{
        backgroundColor: bgColor,
        display: visible ? "inline-block" : "none",
      }}
      onClick={() => {
        handleOnClick();
      }}
    >
      {title}
    </div>
  );
}
