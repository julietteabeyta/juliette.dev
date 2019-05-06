import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Skills extends Component {

  render() {
    return (
      <div className="skills page">
        <Link to="/" className="route">
          <p>Hello</p>
        </Link>
      </div>
    );
  }
}

export default Skills;
