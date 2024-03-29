import React from "react";
import BackgroundImage from "../hamburger.jpg";
import "./Body.css";
import { Button } from "react-bootstrap";

function Body() {
  return (
    <div className="contain">
      <img className="image" src={BackgroundImage} />
      <div className="overlay">
        <h3>
          Notre brasserie vous accueille toute la journée en continu dans un
          cadre typique américain. <br></br>Prêt à partir en voyage ?
        </h3>
        <Button className="button" variant="light">
          Notre Carte
        </Button>
      </div>
    </div>
  );
}

export default Body;
