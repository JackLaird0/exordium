import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/exordium-logo.png';
import PropTypes from 'prop-types';

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="title-logo">
          <NavLink to='/'>
            <img className="logo" src={logo} alt="exordium logo"/>
          </NavLink>
        </div>
        <div className="signin-container">
          <button 
            className="signin-button" 
            onClick={this.props.showLogin}
          >
          Sign Up / Login
          </button>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  showLogin: PropTypes.func
};

export default Header;