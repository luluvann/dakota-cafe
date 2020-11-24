import React, { useState } from "react";
https://www.4rsmokehouse.com/
import "./Navbar.css";

import Logo from "./Logo";
import NavItems from "./NavItems";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="NavbarItems">
     <a className="navbar-logo" href="#">
        <Logo />
     </a>
      <div className="menu-icon" onClick={handleClick}>
        <i 
            className={clicked ? "fas fa-times" : "fas fa-bars"}>
        </i>
      </div>
     
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {NavItems.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <a>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
