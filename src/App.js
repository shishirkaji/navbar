import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import LoggedInNavbar from "./component/LoggedInNavbar";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <LoggedInNavbar/>
    </BrowserRouter>
  );
};

export default App;
