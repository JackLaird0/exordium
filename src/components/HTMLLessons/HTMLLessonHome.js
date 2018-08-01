import React, { Component } from 'react';
import './HTMLLessonHome.css';
import html from '../../assets/anatomy-of-an-html-element.png';

export class HTMLLessonHome extends Component {

  render() {
    return (
      <main>
        <header className="title-container">
          <h1 className="title">Welcome to HTML!</h1>
        </header>
        <div className="body-container">
          <div className="content">
            <h1 className="overview">Overview</h1>
            <p className="text">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page. HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets. Tags such as <span>&#60;img &#47;&#62;</span> and <span>&#60;input &#47;&#62;</span> directly introduce content into the page. Other tags such as <span>&#60;p&#62;</span> surround and provide information about document text and may include other tags as sub-elements. Browsers do not display the HTML tags, but use them to interpret the content of the page.</p>
            <h1 className="key-features">Key Features</h1>
            <li>Elements: <span>&#60;element&#62;&#60;&#47;element&#62;</span></li>
            <li>Tags: <span>&#60;tag&#62;</span></li>
            <li>Attributes: <span>&#60;element style="purple"&#62;</span></li>
            <div className="image-container">
              <img className="html-image" src={html} alt="HTML Image Anatomy" />
            </div>
            <p>Understanding these three features will allow you to build applications with solid structure and content. Lay the foundations of your website here.</p>
          </div>
          <div className="instructions">
            <h1 className="lessons-games">Lessons & Games</h1>
            <p className="text">To get started, choose one of the lessons below. After you have completed the lesson, play the game to test your knowledge!</p>
            <div className="material">
              <div className="material-box">
                <h3 className="material-title">Lessons</h3>
                <div className="lesson-element">Elements & Tags</div>
                <div className="lesson-element">Using Attributes</div>
                <div className="lesson-element">Advanced HTML Tags</div>
              </div>
              <div className="games">
                <h3 className="material-title">Games</h3>
                <div className="lesson-element">Elements & Tags</div>
                <div className="lesson-element">Using Attributes</div>
                <div className="lesson-element">Advanced HTML Tags</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default HTMLLessonHome;