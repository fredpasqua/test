import "./App.css";
import Task1 from "./task1.js";
import Task2 from "./task2.js";
import Task3 from "./task3.js";
import Task4 from "./task4.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./nav";
function App() {
  return (
    <div className="App">
      <h1 className="animate-character">Sample React.js Cards UI</h1>

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Task1 />}></Route>
          <Route path="/Task2" element={<Task2 />}></Route>
          <Route path="/Task3" element={<Task3 />}></Route>
          <Route path="/Task4" element={<Task4 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
