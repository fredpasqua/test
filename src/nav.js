import React from "react";

export default function Nav() {
  return (
    <div>
      <nav>
        <ul className="navList">
          <li>
            <a href="/">
              <button>Task1</button>
            </a>
          </li>
          <li>
            <a href="/Task2">
              <button>Task2</button>
            </a>
          </li>
          <li>
            <a href="/Task3">
              <button>Info-Card</button>
            </a>
          </li>
          <li>
            <a href="/Task4">
              <button>Directory</button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
