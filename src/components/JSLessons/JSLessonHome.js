import React, { Component } from 'react';

export class JSLessonHome extends Component {

  render() {
    return (
      <main>
        <header className="title-container">
          <h1 className="title">Welcome to Javascript!</h1>
        </header>
        <div className="body-container">
          <div className="content">
            <h1 className="overview">Overview</h1>
            <p className="text">
              JavaScript was created to make the web more dynamic. It is an object-oriented scripting language made to run inside a host environment like a web browser and provide programatic control over the objects of that environment. For example, when you click a button and you want something about the webpage to change, you will use JavaScript.
            </p>
            <h1 className="key-features">Key Features</h1>
            <p className="text">
              Understanding these four features will allow you to build dynamic applications with a high degree of interactivity
            </p>
            <li>Variables</li>
            <li>Functions</li>
            <li>Data Types</li>
            <li>Conditionals</li>
            <p className="text">
              Variables, functions, data types, and conditionals, are essential to understanding Javascript.  Understanding these core concepts allows for dynamic websites with a high level of user interactivity.
            </p>
          </div>
          <div className="instructions">
            <h1 className="lessons-games">Lessons & Games</h1>
            <p className="text">
              To get started, choose one of the lessons below. After you have completed the lesson, play the game to test your knowledge!
            </p>
            <div className="material">
              <div className="material-box">
                <h3 className="material-title">Lessons</h3>
                <div className="lesson-element">Variables</div>
                <div className="lesson-element">Declaring Functions</div>
                <div className="lesson-element">Loops</div>
                <div className="lesson-element">Data Types</div>
              </div>
              <div className="games">
                <h3 className="material-title">Games</h3>
                <div className="lesson-element">Variables</div>       
                <div className="lesson-element">Declaring Functions</div>
                <div className="lesson-element">Loops</div>
                <div className="lesson-element">Data Types</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default JSLessonHome;