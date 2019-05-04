import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class About extends Component {

  render() {
    return (
      <div className="about">
        <div className="internal-nav">
          <Router>
            <Link to="/" className="route">
              <p>WORLD!!!!!</p>
            </Link>
          </Router>
        </div>
      </div>
    );
  }
}

export default About;
