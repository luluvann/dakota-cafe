import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
    <div className="container-fluid">
      <div className="row">
      <div className="row-items">
        <h5>Suivez-nous</h5>
      <a
        className="fab fa-facebook"
        href="https://www.facebook.com/LeDakotaCafe/"
      ></a>
      <a
        className="fab fa-instagram"
        href="https://www.instagram.com/cafedakota/"
      ></a>
      </div>
      <div className="row-items">
        <h5>
          Contact
        </h5>
        <h6>
          <a href="https://www.google.com/maps/place/Le+Dakota+caf%C3%A9+bar-brasserie+Am%C3%A9ricaine/@47.3901251,0.6893442,17z/data=!4m5!3m4!1s0x47fcd558880ea7a1:0x724420fc2bae0f42!8m2!3d47.3904222!4d0.6918648">27 Boulevard Heurteloup<br></br>
          37000 Tours</a><br></br>
          <a href="tel:+33234744487">02.34.74.44.87</a>
        </h6>
      </div>
      <div className="row-items">
        <h5>
          Heures d'ouverture
        </h5>
        <h6>
          Lundi au jeudi: 7h à minuit<br></br>
          Vendredi et samedi: 7h à 2h<br></br>
          Dimanche: 9h à minuit<br></br>
        </h6>
      </div>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
