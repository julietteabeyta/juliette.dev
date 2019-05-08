import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles/navbar.scss';
class NavBar extends Component {

  render() {
    return (
      <div className="nav-bar">
        <Link to="/about" className="route">
          <p className="nav-link">about</p>
        </Link>
        <Link to="/skills" className="route">
          <p className="nav-link">skills</p>
        </Link>
        <Link to="/" className="route">
          <p className="nav-link">home</p>
        </Link>
      </div>
    );
  }
}

export default NavBar;
