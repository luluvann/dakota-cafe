import React from "react";

import img1 from "../assets/Img1.png";
import img2 from "../assets/Img2.png"
import img3 from "../assets/Img3.png"
import img4 from "../assets/Img4.png"


import "./Carte.css";

function Carte() {
  return (
    <div className="carte-container" id="section2">
        <img src={img1}></img>
        <img src={img2}></img>
        <img src={img3}></img>
        <img src={img4}></img>
        
    </div>
  );
}

export default Carte;