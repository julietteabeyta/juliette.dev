import React, { Component } from 'react';
import ReactSVG from 'react-svg'
import '../styles/about.scss';

class About extends Component {

  render() {

    const svgPath = 'juliette.svg';

    return (
      <div className="about page">
          <ReactSVG className="juliette-svg"src={svgPath}/>
      </div>
    );
  }
}

export default About;
