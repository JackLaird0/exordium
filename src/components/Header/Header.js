import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/exordium-logo.png';

export class Header extends Component {

  render() {
    return (
      <header>
        <div className="title-logo">
          <img className="logo" src={logo} alt="exordium logo"/>
        </div>
        <div className="signin-container">
        
          <NavLink to='/login' className='nav' activeClassName='selected'><button className="login">LOG IN</button>  </NavLink>
          <NavLink to='/signup' className='nav' activeClassName='selected'><button className="signup">SIGN UP</button> </NavLink>
        </div>
      </header>
    )
  }
}

export default Header;