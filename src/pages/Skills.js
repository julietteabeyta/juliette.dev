import React, { Component } from 'react';
import '../styles/skills.scss';
class Skills extends Component {

  render() {
    return (
      <div className="skills page">
        <div className="skills-container">
          <div className="skills-languages">
            <h3>Languages</h3>
              <li>JavaScript</li>
              <li>HTML5</li>
              <li>PHP7</li>
              <li>CSS3</li>
          </div>
          <div className="skills-frameworks">
            <h3>Frameworks and Libraries</h3>
              <li>React</li>
              <li>React Native</li>
              <li>Redux</li>
              <li>Backbone</li>
              <li>jQuery</li>
              <li>Material UI</li>
              <li>BootStrap</li>
              <li>SCSS</li>
          </div>
          <div className="skills-miscellaneous">
            <h3>Other Superpowers</h3>
              <li>API/RESTful Architecture</li>
              <li>SVG Animation</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Git</li>
              <li>JIRA</li>
              <li>Chrome Applications</li>
              <li>XCode</li>
              <li>Android Studio</li>
              <li>Sketch</li>
              <li>Agile Web Development</li>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
