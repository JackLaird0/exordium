import React, { Component } from 'react';
import './HomePage.css';

export class HomePage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main>
        <div className="hero-image">
          <h3 className="main-text">Welcome to the Beginning of a New Kind of Learning </h3>
          <p className="sub-text">Programming challenges you to use both your creativity and logic</p>
        </div>
        <div className="lessons">
          <h3 className="lessons-header">Get Started With</h3>
          <div className="lessons-container">
            <button className="lesson-link">HTML</button>
            <button className="lesson-link">CSS</button>
            <button className="lesson-link">JAVASCRIPT</button>
          </div>
        </div>
        <div className="resources">
          <h3 className="resources-header">Check Out These Resources to Continue your Learning</h3>
          <div className="resources-container">
          
          </div>
        </div>
      </main>
    )
  }
}

export default HomePage;