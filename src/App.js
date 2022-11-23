import "./App.css";
import Task1 from "./task1.js";
import Task2 from "./task2.js";
import Task3 from "./task3.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <h1>Header</h1>

        <nav>
          <ul className="navList">
            <li>
              <button>
                <a href="/Task1">Task1</a>
              </button>
            </li>
            <li>
              <button>
                <a href="/Task2">Task2</a>
              </button>
            </li>
            <li>
              <button>
                <a href="/Task3">Task3</a>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/Task1" element={<Task1 />}></Route>
          <Route path="/Task2" element={<Task2 />}></Route>
          <Route path="/Task3" element={<Task3 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
