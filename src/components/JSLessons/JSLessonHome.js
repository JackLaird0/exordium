import React, { Component } from 'react';

export class JSLessonHome extends Component {

  render() {
    return (
      <main>
        <header>
          <h1>Welcome to Javascript!</h1>
        </header>
        <div className="basics">
          <h1>Before you start, please read this brief overview</h1>
          <p>JavaScript allows us to manipulate our application using conditional logic</p>
          <p>The key features of JavaScript include:</p>
          <li>Variables</li>
          <li>Functions</li>
          <li>Data Types</li>
          <li>Conditionals</li>
          <p>Understanding these four features will allow you to build dynamic applications with a high degree of interactivity</p>
          <p>Let's get started!</p>
        </div>
        <div className="instructions">
          <p>To get started, choose one of the lessons below</p>
          <p>After you have completed the lesson, play the game to test your knowledge!</p>
        </div>
        <div className="lessons">
          <div>Lesson 01: Variables</div>
          <div>Lesson 02: Declaring Functions</div>
          <div>Lesson 03: Loops</div>
          <div>Lesson 04: Data Types</div>
        </div>
        <div className="games">
          <div>Game 01: Variables</div>
          <div>Game 02: Declaring Functions</div>
          <div>Game 03: Loops</div>
          <div>Game 04: Data Types</div>
        </div>
      </main>
    )
  }
}

export default JSLessonHome;