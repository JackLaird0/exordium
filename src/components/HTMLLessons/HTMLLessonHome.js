import React, { Component } from 'react';

export class HTMLLessonHome extends Component {

  render() {
    return (
      <main>
        <header>
          <h1>Welcome to HTML!</h1>
        </header>
        <div className="basics">
          <h1>Before you start, please read this brief overview</h1>
          <p>HTML is the backbone of our application</p>
          <p>The key features of HTML include:</p>
          <li>Elements</li>
          <li>Tags</li>
          <li>Attributes</li>
          <li>Classes and Id's</li>
          <p>Understanding these four features will allow you to build applications with solid structure and content. Lay the foundations of your website here.</p>
          <p>Let's get started!</p>
        </div>
        <div className="instructions">
          <p>To get started, choose one of the lessons below</p>
          <p>After you have completed the lesson, play the game to test your knowledge!</p>
        </div>
        <div className="lessons">
          <div>Lesson 01: Elements & Tags</div>
          <div>Lesson 02: Classes & Ids</div>
          <div>Lesson 03: Using Attributes</div>
          <div>Lesson 04: Advanced HTML Tags</div>
        </div>
        <div className="games">
          <div>Game 01: Elements & Tags</div>
          <div>Game 02: Declaring Functions</div>
          <div>Game 03: Using Attributes</div>
          <div>Game 04: Advanced HTML Tags</div>
        </div>
      </main>
    )
  }
}

export default HTMLLessonHome;