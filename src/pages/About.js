import React, { Component } from 'react';
import { Link } from "react-router-dom";

class About extends Component {

  render() {
    return (
      <div className="about page">
        <Link to="/" className="route">
          <p>WORLD!!!!!</p>
        </Link>
      </div>
    );
  }
}

export default About;
