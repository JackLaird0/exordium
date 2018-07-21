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
      </main>
    )
  }
}

export default HomePage;