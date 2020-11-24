import React from "react";

import logo from "../Logo.jpg"
import Image from "react-bootstrap/Image";

function Logo() {
  //const logo = require('../Logo.jpg');
  return <Image src={logo} style={{ width: "8rem" }} />;
}

export default Logo;
