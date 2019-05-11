import React, { Component } from 'react';
import ReactSVG from 'react-svg'

import atSymbol from '../images/atSymbol.svg';
import codepen from '../images/codepen.svg';
import github from '../images/github.svg';
import linkedIn from '../images/linkedIn.svg';
import twitter from '../images/twitter.svg';
import '../styles/app.scss';

class App extends Component {
  
  
  render() {
    const svgPath = 'juliette.svg';
    return (
      <div className="app">
        <header className="header">
          <ReactSVG className="juliette-svg" src={svgPath} />
          <div className="title">juliette<br/>developer//designer</div>
          <div className="external-nav">
            <a
              className="ext-nav-link"
              href="mailto:julietteabeyta@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={atSymbol} className="email-link" alt="email-icon" />
            </a>
            <a
              className="ext-nav-link"
              href="https://twitter.com/julietteabeyta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} className="twitter-link" alt="twitter-icon" />
            </a>
            <a
              className="ext-nav-link"
              href="https://www.linkedin.com/in/juliette-abeyta-90b761162/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedIn} className="linkedIn-link" alt="linkedIn-icon" />
            </a>
            <a
              className="ext-nav-link"
              href="https://github.com/julietteabeyta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} className="github-link" alt="github-icon" />
            </a>
            <a
              className="ext-nav-link"
              href="https://codepen.io/julietteabeyta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={codepen} className="codepen-link" alt="codepen-icon" />
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
