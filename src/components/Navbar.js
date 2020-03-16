import React from "react";
import "./Navbar.css";
import Logo from "../logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const linkStyle = {
    color: "white",
    textDecoration: "none"
  };

  return (
    <nav>
      <img src={Logo} alt="" />
      <Link style={linkStyle} to="/">
        <h3>React_Router</h3>
      </Link>
      <ul className="nav-Links">
        <Link style={linkStyle} to="/news">
          <li>News</li>
        </Link>
        <Link style={linkStyle} to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
