import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div className="link-container">
          <Link to="/Adelita" className="link">
            Página 1
          </Link>
        </div>
        <div className="link-container">
          <Link to="/Per_Lovers" className="link">
            Página 2
          </Link>
        </div>
      </div>
    );
  }
}
export default NavBar;
