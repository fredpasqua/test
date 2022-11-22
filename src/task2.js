import React from "react";
import { useState } from "react";
import { Button } from "react";

export default function Task2() {
  const [color1, setColor1] = useState("yellow");
  const [color2, setColor2] = useState("red");
  const handleChange = (e) => {
    setColor1("red");
    setColor2("yellow");
  };
  return (
    <div>
      <Button className="boxOne" style={color1} onClick={handleChange} />
      <Button className="boxTwo" style={color1} />
    </div>
  );
}
