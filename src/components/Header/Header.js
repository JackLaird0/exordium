import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

export class Header extends Component {

  render() {
    return (
      <header>
        <div className="title-logo">
          <h1 className="web-title">EXORDIUM</h1>
        </div>
        <NavLink to='/login' className='nav' activeClassName='selected'>Log In</NavLink>
        <NavLink to='/signup' className='nav' activeClassName='selected'>Sign Up</NavLink>
      </header>
    )
  }
}

export default Header;