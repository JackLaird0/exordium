import React, { Component } from 'react';
import selector from '../../assets/css-rule.png';
import './CSSLessonHome.css';
import { NavLink } from 'react-router-dom';

export class CSSLessonHome extends Component {
  
  render() {
    return (
      <main>
        <header>
          <h1>Welcome to CSS!</h1>
        </header>
        <div className="basics">
          <h1>Before you start, please read this brief overview</h1>
          <p>In order for CSS to work with your HTML, we need to use selectors</p>
          <p>CSS selectors allow us to "select" an HTML element by its:</p>
            <li>Element Type</li>
            <li>Class Name</li>
            <li>Id</li>
          <p>Once selected, we can use CSS to manipulate our selected element, changing it's apperance and position on the page</p>
          <p>Here is a sample CSS selector.  Notice its structure and syntax.  This will be important moving forward!</p>
          <img src={ selector } alt="CSS Selector Anatomy"/>
          <p>Now that we know how to properly select elements, let's get started!</p>
        </div>
        <div className="instructions">
          <p>To get started, choose one of the lessons below</p>
          <p>After you have completed the lesson, play the game to test your knowledge!</p>
        </div>
        <div className="lessons">
          <div>Lesson 01: FlexBox</div>
          <div>Lesson 02: CSS Grid</div>
          <div>Lesson 03: Margins</div>
          <div>Lesson 04: Fonts</div>
        </div>
        <div className="games">
          <NavLink to='/lessons_css/01'>
            <div>Game 01: FlexBox</div>
          </NavLink>
          <div>Game 02: CSS Grid</div>
          <div>Game 03: Margins</div>
          <div>Game 04: Fonts</div>
        </div>
      </main>
    )
  }
}

export default CSSLessonHome;