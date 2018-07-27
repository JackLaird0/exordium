import React, { Component } from 'react';
import './Login.css';

export class Login extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <div className='login-container'>
        <form className='sign-up'>
          <input
            type='text'
            placeholder='Name'
          />
          <input
            type='text'
            placeholder='Username'
          />
          <input
            type='text'
            placeholder='Password'
          />
          <input
            type='text'
            placeholder='Password'
          />
        </form>
        <form className='login'>
          <input
            type='text'
            placeholder='Username'
          />
          <input
            type='text'
            placeholder='Password'
          />
        </form>
      </div>
    )
  }
}

export default Login;