import "./App.scss";
import Task1 from "./task1.js";
import Task2 from "./task2.js";
import Task3 from "./task3.js";
import Directory from "./Directory.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./nav";
function App() {
  return (
    <>
      <Directory></Directory>
      {/* <div className="App">
        <h1 className="animate-character">Sample React.js Cards UI</h1>

        <BrowserRouter>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Task1 />}></Route>
            <Route path="/Task2" element={<Task2 />}></Route>
            <Route path="/Task3" element={<Task3 />}></Route>
          </Routes>
        </BrowserRouter>
      </div> */}
    </>
  );
}

export default App;
