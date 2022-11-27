import React from "react";
import { useState } from "react";
import DataBox from "./dataBox.jsx";
export default function Task2() {
  const data = [
    { title: "one", color: "blue" },
    { title: "two", color: "red" },
    { title: "three", color: "green" },
    { title: "four", color: "yellow" },
  ];

  const [visible, setVisibility] = useState(true);
  let handleOnClick = () => {
    setVisibility(!visible);
    console.log(visible);
  };
  return (
    <>
      <div className="taskContainer">
        <div className="taskThreeBox">
          <ul className="boxListItems">
            {data.map((data) => {
              return (
                <li key={data.title} className="boxListItem">
                  <DataBox
                    title={data.title}
                    bgColor={data.color}
                    visible={visible}
                  />
                  {/* TO DO: Make box clickable and remove from view */}
                </li>
              );
            })}
          </ul>
          <button
            onClick={() => {
              handleOnClick();
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
