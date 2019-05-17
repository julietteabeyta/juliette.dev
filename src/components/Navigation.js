import React, { Component } from 'react';
import '../styles/navbar.scss';
import jsaLogo from '../images/jsaLogo.png'
class NavBar extends Component {

  componentDidMount() {
    // switch (window.location.pathname) {
    //   case '/':
    //     document.getElementById('home-route').className += ' active';
    //     break;
    //   case '/about':
    //     document.getElementById('about-route').className += ' active';
    //     break;
    //   case '/skills':
    //     document.getElementById('skills-route').className += ' active';
    //     break;

    //   default:
    //     break;
    // }
  }

  handleClick(e) {
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
        <img src={jsaLogo} alt="juliette-logo"/>
        <ul>
          <li className="nav-link">home</li>
          <li className="nav-link">about</li>
          <li className="nav-link">work</li>
          <li className="nav-link">skills</li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
