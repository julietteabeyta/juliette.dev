import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './About';
import Skills from './Skills';
import App from './Home';


class ApplicationRoutes extends Component {

  render() {
    return (
      <div className="internal-nav">
        <Router>
          <Route path="/" component={App} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
        </Router>
      </div>
    );
  }
}

export default ApplicationRoutes;
