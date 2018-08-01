import React, { Component } from 'react';
import selector from '../../assets/css-rule.png';
import './CSSLessonHome.css';
import { NavLink } from 'react-router-dom';

export class CSSLessonHome extends Component {

  render() {
    return (
      <main>
        <header className="title-container">
          <h1 className="title">Welcome to CSS!</h1>
        </header>
        <div className="body-container">
          <div className="content">
            <h1 className="overview">Overview</h1>
            <p className="text">
              It’s a “style sheet language” that lets you style the HTML elements on your page. CSS works with HTML, but isn’t HTML. CSS controls the positioning, sizing, colors, and specific fonts on your page. There is a class and id attribute available to use on every html element. In addition to the plain old tag names themselves, these attributes allow you to create “targets” for both your css and javascript. They are hooks so that you can manipulate the look and behavior of your HTML elements.
            </p>
            <h1 className="selectors">CSS Selectors</h1>
            <p className="text">
              In order for CSS to work with your HTML, we need to use selectors. CSS selectors allow us to "select" an HTML element by its:
            </p>
            <div className="selectors-container">
              <li>Element Type: "element"</li>
              <li>Class Name: ".class-name"</li>
              <li>Id: "#id"</li>
            </div>
            <p className="text">
              Once selected, we can use CSS to manipulate our selected element, changing it's apperance and position on the page. Here is a sample CSS selector.  Notice its structure and syntax.  This will be important moving forward!
            </p>
            <div className="image-container">
              <img 
                className="css-image" 
                src={selector} 
                alt="CSS Selector Anatomy" 
              />
            </div>
            <p className="text">
              Selecting HTML elements provides us with the power to create beautiful web applications. Now that we know how to properly select elements, let's get started!
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
                <div className="lesson-element">FlexBox</div>
                <div className="lesson-element">CSS Grid</div>
                <div className="lesson-element">Margins</div>
                <div className="lesson-element">Fonts</div>
              </div>
              <div className="games">
                <h3 className="material-title">Games</h3>
                <NavLink
                  to='/lessons_css/01'
                  className="lesson-element"
                >
                  <div>FlexBox</div>
                </NavLink>
                <div className="lesson-element">CSS Grid</div>
                <div className="lesson-element">Margins</div>
                <div className="lesson-element">Fonts</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default CSSLessonHome;