import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar bg-secondary-2-0">
        <p> 1liffe</p>
        <p className="about"> About</p>
        <p className="media"> Media</p>
        <p className="contact"> Contact</p>
      </div>
    );
  }
}

export default Navbar;
