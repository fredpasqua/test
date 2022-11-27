import React from "react";

export default function DataBox({ title, bgColor }) {
  return (
    <div className="elementBox" style={{ backgroundColor: bgColor }}>
      {title}
    </div>
  );
}
