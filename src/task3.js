import DataBox from "./dataBox.jsx";
import { useState } from "react";
export default function Task3() {
  const data = [
    {
      title: "Blue",
      color: "blue",
      visible: true,
    },
    { title: "Red", color: "red", visible: true },
    { title: "Green", color: "green", visible: true },
    { title: "Yellow", color: "yellow", visible: true },
    { title: "Orange", color: "orange", visible: true },
    { title: "Purple", color: "purple", visible: true },
    { title: "Grey", color: "grey", visible: true },
    { title: "Aqua", color: "aqua", visible: true },
    { title: "pink", color: "pink", visible: true },
  ];

  const [items, setItems] = useState(data);

  let handleClick = (title) => {
    setItems(
      items.map((item) =>
        item.title === title ? { ...item, visible: false } : item
      )
    );
  };

  let handleReset = () => {
    setItems(items.map((item) => (item ? { ...item, visible: true } : null)));
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
