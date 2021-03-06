import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import CSSLessonHome from '../CSSLessons/CSSLessonHome';
import JSLessonHome from '../JSLessons/JSLessonHome';
import HTMLLessonHome from '../HTMLLessons/HTMLLessonHome';
import Login from '../Login/Login';
import { Route } from 'react-router-dom';
import CSSLesson01 from '../CSSLesson01/CSSLesson01';


class App extends Component {

  constructor() {
    super();
    this.state = {
      loginClass: 'hidden'
    };
  }

  showLogin = () => {
    this.setState({ loginClass: 'show' });
  }

  hideLogin = () => {
    this.setState({ loginClass: 'hidden' });
  }

  render() {
    return (
      <div className="app">
        <Route path='/' render={() => <Header showLogin={this.showLogin} />} />
        <Route
          path='/'
          render={() => <Login
            hideLogin={this.hideLogin}
            loginClass={this.state.loginClass}
          />} />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/lessons_css' component={CSSLessonHome} />
        <Route exact path='/lessons_js' component={JSLessonHome} />
        <Route exact path='/lessons_html' component={HTMLLessonHome} />
        <Route exact path='/lessons_css/01' component={CSSLesson01} />
      </div>
    );
  }
}

export default App;
