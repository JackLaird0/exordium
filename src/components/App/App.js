import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import { Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Route path='/' component={Header} />
      </div>
    );
  }
}

export default App;
