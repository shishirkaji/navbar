import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles, responsiveFontSizes } from "@material-ui/core/styles";
import "./Navbar.css";
const Navbar = () => {
  const useStyles = makeStyles((theme) => ({
    button: {
      color: "white",
      letterSpacing: "3px",
      fontSize: "14px",
      fontWeight: "bold",
    },
  }));
  const classes = useStyles();

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
    <div id = "wrapper">
      <nav>
        <div className="logo">
          {" "}
          <img
            src="https://himaausadvantage.com.au/images/app-logo.svg"
            className="logo-size"
            alt="logo"
          />
        </div>
        <div>
          <Button className={classes.button}>login</Button>
          <Button className={classes.button}>Signup</Button>
        </div>

        <ul className={`nav-link ${nav !== "nav-link" ? `nav-active` : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/offers">Offers</Link>
          </li>{" "}
          <li>
            <Link to="/about">About</Link>
          </li>{" "}
          <li>
            <Link to="/terms">Terms</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
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
    </div>
  );
};

export default Navbar;
