import React from "react";
const App = () => {
  return (
    <nav>
      <div className="logo">
        {" "}
        <img
          src="https://himaausadvantage.com.au/images/app-logo.svg"
          className="logo-size"
        />
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>{" "}
        <li>
          <a href="#">Work</a>
        </li>{" "}
        <li>
          <a href="#">Projects</a>
        </li>
      </ul>
    </nav>
  );
};

export default App;
