import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar bg-secondary-2-0">
        <p className="title">1liffe</p>
        <div className="nav">
          <NavLink
            to="/"
            exact
            activeStyle={{ backgroundColor: "#2ed573" }}
            className="about"
          >
            <p>About</p>
          </NavLink>
          <NavLink
            to="/media"
            exact
            activeStyle={{ backgroundColor: "#eccc68" }}
            className="media"
          >
            <p>Media</p>
          </NavLink>
          <NavLink
            to="/contact"
            exact
            activeStyle={{ backgroundColor: "#ff4757" }}
            className="contact"
          >
            <p>Contact</p>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navbar;
