import React, { Component } from 'react';
import { Link } from "react-router-dom";
import headshot from '../images/headshot.jpg';
import atSymbol from '../images/atSymbol.svg';
import codepen from '../images/codepen.svg';
import github from '../images/github.svg';
import linkedIn from '../images/linkedIn.svg';
import twitter from '../images/twitter.svg';
import '../App.css';

class App extends Component {

  render() {
    return (
      <div className="app">
        <header className="header">
          <img src={headshot} className="headshot" alt="juliette-headshot" />
          <div className="name">Juliette</div>
          <div className="title">Developer//designer</div>
          <div className="external-nav">
            <a
              className="nav-link"
              href="mailto:julietteabeyta@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={atSymbol} className="email-link" alt="email-icon" />
            </a>
            <a
              className="nav-link"
              href="https://twitter.com/julietteabeyta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} className="twitter-link" alt="twitter-icon" />
            </a>
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/juliette-abeyta-90b761162/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedIn} className="linkedIn-link" alt="linkedIn-icon" />
            </a>
            <a
              className="nav-link"
              href="https://github.com/julietteabeyta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} className="github-link" alt="github-icon" />
            </a>
            <a
              className="nav-link"
              href="https://codepen.io/julietteabeyta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={codepen} className="codepen-link" alt="codepen-icon" />
            </a>
          </div>
        </header>
        <div>
          <Link to="/skills" className="route">
            <button>
                <p>Skills</p>
            </button>
          </Link>
          <Link to="/about" className="route">
            <button>
              <p>About</p>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default App;
