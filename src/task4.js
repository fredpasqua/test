import UserBox from "./userBox.jsx";
import { useEffect } from "react";
import { useState } from "react";
export default function Task4() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users/2")
      .then((res) => res.json())
      .then((json) => setUsers(json));
  }, []);
  console.log(users);
  return (
    <>
      <h1>
        {users.firstName} {users.lastName}
      </h1>
      <img src={users.image} alt="mushroom" />
      <h2>Gender: {users.gender.toUpperCase()}</h2>
    </>
  );

  // // function shuffle(array) {
  // //   let currentIndex = array.length,
  // //     randomIndex;

  //   // While there remain elements to shuffle.
  //   while (currentIndex !== 0) {
  //     // Pick a remaining element.
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex--;

  //     // And swap it with the current element.
  //     [array[currentIndex], array[randomIndex]] = [
  //       array[randomIndex],
  //       array[currentIndex],
  //     ];
  //   }

  //   return array;
  // }

  // let handleClick = (title) => {
  //   setItems(
  //     items.map((item) =>
  //       item.title === title ? { ...item, visible: false } : item
  //     )
  //   );
  // };

  // let handleReset = () => {
  //   setItems(items.map((item) => (item ? { ...item, visible: true } : null)));
  // };
  //   return (
  //     <>
  //       <div className="taskContainer">
  //         <h1>Click to Remove Items</h1>
  //         <div className="taskThreeBox">
  //           <ul className="boxListItems">
  //             {users.map((e) => (
  //               <li
  //                 key={e.id}
  //                 className="boxListItem showAll"
  //                 // onClick={() => handleClick(e.title)}
  //               >
  //                 <UserBox
  //                 // name={e.firstName + " " + e.lastName}
  //                 // bgColor={e.color}
  //                 // visibility={e.visible}
  //                 // image={e.image}
  //                 // text={e.text}
  //                 />
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //         {/* <button onClick={() => handleReset()}>reset</button> */}
  //       </div>
  //     </>
  //   );
  // }
}
