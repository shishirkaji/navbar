import React, { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  const [nav, setNav] = useState("nav-link");
  let burger;
  let navLinks;
  useEffect(() => {
    burger = document.querySelector(".burger");
    navLinks = document.querySelectorAll(".nav-link li");
  });
  const clickHandler = () => {
    nav === "nav-link" ? setNav("nav-active") : setNav("nav-link");
    // this is to make the burger cross
    burger.classList.toggle("toggle");
    // this is to make the nav links appear one after another
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ``;
      } else
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
    });
  };
  return (
    <nav>
      <div className="logo">
        {" "}
        <img
          src="https://himaausadvantage.com.au/images/app-logo.svg"
          className="logo-size"
          alt="logo"
        />
      </div>
      <ul className={`nav-link ${nav !== "nav-link" ? `nav-active` : ""}`}>
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
      <div
        className="burger"
        onClick={() => {
          clickHandler();
        }}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default App;
