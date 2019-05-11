import React, { Component } from 'react';
import '../styles/about.scss';

class About extends Component {

  render() {

    return (
      <div className="about page">
        <div className="about-container">
          <h3>Hey. It's me, Juliette.</h3>
          <p>
            I am your average role-playing, coffee-drinking lover of all things horror.
            I currently manage a full-stack development team focusing on writing stellar code and perpetuating
            an inclusive, supportive culture. As a developer, I have a passion for building seamless
            interactions and creating useful, beautiful digital experiences.
          </p>
          <br/>
          <p>
            In addition to development, I enjoy good books, riding fixed gear bikes around the city, and long walks on the beach.
            And I am always looking to connect! You can connect with me on <a href="https://twitter.com/julietteabeyta" target="_blank" rel="noopener noreferrer">twitter</a> or shoot me an email <a href="mailto:julietteabeyta@gmail.com" rel="noopener noreferrer">here.</a>
          </p>
        </div>
      </div>
    );
  }
}

export default About;
