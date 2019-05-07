import React, { Component } from 'react';
import { Link } from "react-router-dom";

class About extends Component {

  render() {
    return (
      <div className="nav-bar">
        <Link to="/" className="route">
          <p>home</p>
        </Link>
        <Link to="/skills" className="route">
          <p>skills</p>
        </Link>
        <Link to="/about" className="route">
          <p>about</p>
        </Link>
      </div>
    );
  }
}

export default About;
