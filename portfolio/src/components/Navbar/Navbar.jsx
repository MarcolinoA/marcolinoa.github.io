import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-item">
          <li className="nav-items">
            <NavLink exact to="/aboutme" className={`nav-links`} activeClassName="active">
              About Me
            </NavLink>
          </li>
          <li className="nav-items">
            <NavLink exact to="/" className={`nav-links`} activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-items">
            <NavLink exact to="/projects" className={`nav-links`} activeClassName="active">
              Projects
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
