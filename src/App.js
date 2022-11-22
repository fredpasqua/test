import "./App.css";
import Task1 from "./task1.js";
import Task2 from "./task2";
import Task3 from "./task3.js";
function App() {
  return (
    <div className="App">
      <h1>Header</h1>
      <nav>
        <ul className="navList">
          <li>
            <button>Task 1</button>
          </li>
          <li>
            <button>Task 2</button>
          </li>
          <li>
            <button>Task 3</button>
          </li>
        </ul>
      </nav>
      <Task1 />

      <Task3 />
    </div>
  );
}

export default App;
