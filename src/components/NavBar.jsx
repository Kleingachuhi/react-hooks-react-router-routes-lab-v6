import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link" activeclassname="active">
        Home
      </NavLink>
      <NavLink to="/directors" className="nav-link" activeclassname="active">
        Directors
      </NavLink>
      <NavLink to="/actors" className="nav-link" activeclassname="active">
        Actors
      </NavLink>
    </nav>
    );
};

export default NavBar;