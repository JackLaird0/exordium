import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import CssLesson from '../Lessons/CssLesson';
import { Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Route path='/' component={Header} />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/lessons_css' component={ CssLesson } />
      </div>
    );
  }
}

export default App;
