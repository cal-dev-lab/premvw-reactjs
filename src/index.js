import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./Components/Navbar/Navbar";
import HeroImg from "./Components/HeroImg/HeroImg";
import HeroText from "./Components/HeroText/HeroText";
import ImageGrid from "./Components/ImgGrid/ImgGrid";
import Specifications from "./Components/Specifications/Specifications";
import Form from "./Components/Form/Form";
import CardGallery from "./Components/CardGallery/CardGallery";
import Footer from "./Components/Footer/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <HeroImg />
    <HeroText />
    <Specifications />
    <ImageGrid />
    <CardGallery />
    <Form />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
