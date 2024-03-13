import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(true);

  const handleClick = () => {
    setClick(!click);
    className="active"
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-item">
          <li className="nav-items">
            <NavLink exact to="/" className={`nav-links`} activeClassName="active">
              About Me
            </NavLink>
          </li>
          <li className="nav-items">
            <NavLink exact to="/" className={`nav-links`} activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-items">
            <NavLink exact to="/" className={`nav-links`} activeClassName="active">
              Projects
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
