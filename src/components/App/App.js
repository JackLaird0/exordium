import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import CSSLessonHome from '../CSSLessons/CSSLessonHome';
import JSLessonHome from '../JSLessons/JSLessonHome';
import HTMLLessonHome from '../HTMLLessons/HTMLLessonHome';
import Login from '../Login/Login';
import { Route } from 'react-router-dom';


class App extends Component {

  toggleLogin() {
    console.log('woo')
  }

  render() {
    return (
      <div className="app">
        <Route path='/' render={() => <Header toggleLogin={this.toggleLogin}/>}/>
        <Route path='/' render={() => <Login />} />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/lessons_css' component={ CSSLessonHome } />
        <Route exact path='/lessons_js' component={ JSLessonHome } />  
        <Route exact path='/lessons_html' component={HTMLLessonHome} />       
      </div>
    );
  }
}

export default App;
