import React from "react";

import img from "../assets/Img1.png"

import "./Carte.css";

function Carte() {
  return (
    <div className="carte-container" id="section2">
        <img src={img}></img>
        <img src={img}></img>
        
    </div>
  );
}

export default Carte;