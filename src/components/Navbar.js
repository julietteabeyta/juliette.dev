import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles/navbar.scss';
class NavBar extends Component {

  componentDidMount() {
    switch (window.location.pathname) {
      case '/':
        document.getElementById('home-route').className += ' active';
        break;
      case '/about':
        document.getElementById('about-route').className += ' active';
        break;
      case '/skills':
        document.getElementById('skills-route').className += ' active';
        break;

      default:
        break;
    }
  }

  handleClick(e){
    let links = document.getElementsByClassName('route');
    for (let i = 0; i < links.length; i++) {
        let current = document.getElementsByClassName("active");
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }
    }
    let link = e.currentTarget;
    link.className += ' active';
  }

  render() {
    return (
      <div className="nav-bar">
        <Link to="/skills" className="route" id="skills-route" onClick={(e) => this.handleClick(e)}>
          <p className="nav-link">skills</p>
        </Link>
        <Link to="/about" className="route" id="about-route" onClick={(e) => this.handleClick(e)}>
          <p className="nav-link">about</p>
        </Link>
        <Link to="/" className="route" id="home-route" onClick={(e) => this.handleClick(e)}>
          <p className="nav-link">home</p>
        </Link>
      </div>
    );
  }
}

export default NavBar;
