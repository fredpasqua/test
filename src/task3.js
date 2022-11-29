import DataBox from "./dataBox.jsx";
import { useState } from "react";
export default function Task2() {
  const data = [
    { title: "one", color: "blue", visible: true },
    { title: "two", color: "red", visible: true },
    { title: "three", color: "green", visible: true },
    { title: "four", color: "yellow", visible: true },
  ];

  const [info, setInfo] = useState(
    data.map((data) =>
      data.visible ? (
        <li key={data.title} className="boxListItem">
          <DataBox title={data.title} bgColor={data.color} />
        </li>
      ) : null
    )
  );

  return (
    <>
      <div className="taskContainer">
        <div className="taskThreeBox">
          <ul className="boxListItems">{info}</ul>
        </div>
        <button>reset</button>
      </div>
    </>
  );
}
