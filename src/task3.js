import DataBox from "./dataBox.jsx";
import { useState } from "react";
export default function Task2() {
  const data = [
    { title: "one", color: "blue" },
    { title: "two", color: "red" },
    { title: "three", color: "green" },
    { title: "four", color: "yellow" },
  ];
  const [displayState, setDisplayState] = useState("null");
  let handleRefresh = () => {
    // Need Logic to reset visibility
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
                    display={displayState}
                    title={data.title}
                    bgColor={data.color}
                  />
                  {/* TO DO: Make box clickable and remove from view */}
                </li>
              );
            })}
          </ul>
        </div>
        <button onClick={handleRefresh}>reset</button>
      </div>
    </>
  );
}
