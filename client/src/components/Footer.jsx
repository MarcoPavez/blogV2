import React from "react";
import logoLAD from "../img/logoLAD.jpg";

const Footer = () => {
  return (
    <footer>
      <img src={logoLAD} alt="" />
      <span>
        Made with ♥️ and <b>React.js</b>.
      </span>
    </footer>
  );
};

export default Footer;