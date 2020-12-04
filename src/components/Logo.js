import React from "react";

import logo from "../Logo3.jpg"
import Image from "react-bootstrap/Image";

function Logo() {
  //const logo = require('../Logo.jpg');
  return <Image src={logo} style={{ width: "18rem" }} />;
}

export default Logo;
