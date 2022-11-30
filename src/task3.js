import DataBox from "./dataBox.jsx";
import { useState } from "react";
export default function Task3() {
  const data = [
    {
      title: "Blue",
      color: "blue",
      visible: true,
      image:
        "https://images.pexels.com/photos/1249884/pexels-photo-1249884.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      title: "Red",
      color: "red",
      visible: true,
      image:
        "https://images.pexels.com/photos/36438/mushrooms-brown-mushrooms-cook-eat.jpg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      title: "Green",
      color: "green",
      visible: true,
      image:
        "https://images.pexels.com/photos/793267/pexels-photo-793267.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Yellow",
      color: "yellow",
      visible: true,
      image:
        "https://images.pexels.com/photos/361186/forest-mushrooms-nature-autumn-361186.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Orange",
      color: "orange",
      visible: true,
      image:
        "https://images.pexels.com/photos/53494/mushroom-fungi-fungus-many-53494.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      title: "Purple",
      color: "purple",
      visible: true,
      image:
        "https://images.pexels.com/photos/51391/matryoshka-amanita-muscaria-mushroom-hat-51391.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Grey",
      color: "grey",
      visible: true,
      image:
        "https://images.pexels.com/photos/68732/mushrooms-mushroom-back-light-grey-68732.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Aqua",
      color: "aqua",
      visible: true,
      image:
        "https://images.pexels.com/photos/129467/pexels-photo-129467.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "pink",
      color: "pink",
      visible: true,
      image:
        "https://images.pexels.com/photos/675258/pexels-photo-675258.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const [items, setItems] = useState(shuffle(data));

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }


  let handleClick = (title) => {
    setItems(
      items.map((item) =>
        item.title === title ? { ...item, visible: false } : item
      )
    );
    console.log(data);
  };

  let handleReset = () => {
    setItems(items.map((item) => (item ? { ...item, visible: true } : null)));
  };
  return (
    <>
      <div className="taskContainer">
        <h1>Click to Remove Items</h1>
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
                  image={e.image}
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
