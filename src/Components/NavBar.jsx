import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo_1 from "../assets/logo_1.png"

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/"><img src={logo_1} alt="" /></Link>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">Contact</Link>
          </li>
          <li className="navbar-item">
            <Link to="/recipes" className="navbar-link">Recipes</Link>
          </li>
          <li className="navbar-item">
            <Link to="/services" className="navbar-link">Services</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
