import DataBox from "./dataBox.jsx";
import { useState } from "react";
export default function Task2() {
  let data = [
    { title: "one", color: "blue" },
    { title: "two", color: "red" },
    { title: "three", color: "green" },
    { title: "four", color: "yellow" },
  ];
  let handleClick = () => {
   console.log("clicked");
 };
  return (
    <>
      <div className="taskContainer">
        <div className="taskThreeBox">
          <ul className="boxListItems">
            {data.map((data) => (
              <DataBox
                key={data.title}
                title={data.title}
                bgColor={data.color}
                onClick={() => handleClick}
              />
            ))}
          </ul>
        </div>
        <button>reset</button>
      </div>
    </>
  );
}
