import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles/navbar.scss';
class NavBar extends Component {

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
        <Link to="/about" className="route" onClick={(e) => this.handleClick(e)}>
          <p className="nav-link" >about</p>
        </Link>
        <Link to="/skills" className="route" onClick={(e) => this.handleClick(e)}>
          <p className="nav-link" >skills</p>
        </Link>
        <Link to="/" className="route active" onClick={(e) => this.handleClick(e)}>
          <p className="nav-link" >home</p>
        </Link>
      </div>
    );
  }
}

export default NavBar;
