import React, { Component } from 'react';
import ReactSVG from 'react-svg'

import atSymbol from '../images/atSymbol.svg';
import codepen from '../images/codepen.svg';
import github from '../images/github.svg';
import linkedIn from '../images/linkedIn.svg';
import twitter from '../images/twitter.svg';
import NavBar from '../components/Navigation';
import About from '../pages/About';
import Skills from '../pages/Skills';
import '../styles/app.scss';

class App extends Component {

  state={
    stroke: 'white',
  }
  
  changeColor(e){
    let {stroke} = this.state;
    stroke = e.currentTarget.id;
    if (stroke){
      this.setState({ stroke })
    }
  }
  
  render() {
    const svgPath = 'juliette.svg';
    return (
      <div className="app">
        <NavBar />
        <header className="header">
          <div className="header-photo">
            <div className="stroke-options">
              <div className="stroke-option" id="blue" onClick={(e)=> this.changeColor(e)}></div>
              <div className="stroke-option" id="red" onClick={(e) => this.changeColor(e)}></div>
              <div className="stroke-option" id="yellow" onClick={(e) => this.changeColor(e)}></div>
              <div className="stroke-option" id="white" onClick={(e) => this.changeColor(e)}></div>
            </div>
            <ReactSVG className={`juliette-svg ${this.state.stroke}`} src={svgPath}/>
          </div>
          <div className="title-parent">
          <div className="name">juliette s. abeyta</div>
          <div className="title">developer && designer</div>
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
          </div>
        </header>
        <About />
        <Skills />
      </div>
    );
  }
}

export default App;
