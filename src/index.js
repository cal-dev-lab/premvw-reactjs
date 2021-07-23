import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./Components/Navbar/Navbar";
import HeroImg from "./Components/HeroImg/HeroImg";
import HeroText from "./Components/HeroText/HeroText";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <HeroImg />
    <HeroText />
  </React.StrictMode>,
  document.getElementById("root")
);
