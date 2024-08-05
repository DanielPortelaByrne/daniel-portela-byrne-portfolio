import React from "react";
import { Link } from "react-router-dom";
import logoIcon from "../assets/logo_icon.png"; // Import the image

import "./Logo.css"; // Import CSS for the logo

const Logo: React.FC = () => {
  return (
    <Link to="/" className="logo">
      <img src={logoIcon} alt="Initials Logo" />
    </Link>
  );
};

export default Logo;
