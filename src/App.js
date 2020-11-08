import React from "react";
import { BrowserRouter, } from "react-router-dom";
import Navbar from "./component/Navbar";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};

export default App;
