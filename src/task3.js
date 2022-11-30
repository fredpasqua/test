import DataBox from "./dataBox.jsx";
import { useState } from "react";
export default function Task3() {
  let data = [
    { title: "one", color: "blue", visible: true },
    { title: "two", color: "red", visible: true },
    { title: "three", color: "green", visible: true },
    { title: "four", color: "yellow", visible: true },
  ];

  const [items, setItems] = useState(data);

  let handleClick = (title) => {
    setItems(
      items.map((item) =>
        item.title === title ? { ...item, visible: false } : item
      )
    );
    console.log(items);
  };

  let handleReset = () => {
    setItems(
      items.map((item) => (item.title ? { ...item, visible: true } : null))
    );
  };
  return (
    <>
      <div className="taskContainer">
        <div className="taskThreeBox">
          <ul className="boxListItems">
            {items.map((e) => (
              <li
                key={e.title}
                className="boxListItem showAll"
                onClick={() => handleClick(e.title)}
              >
                <DataBox
                  title={e.title}
                  bgColor={e.color}
                  visibility={e.visible}
                />
                {/* TO DO: Make box clickable and remove from view */}
              </li>
            ))}
          </ul>
        </div>
        <button onClick={() => handleReset()}>reset</button>
      </div>
    </>
  );
}
