import React, { Component } from 'react';
import './Login.css';

export class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      view: 'hidden',
      name: '',
      username: '',
      password: ''
    }
  }

  render() {
    console.log(this.props)
    return (
      <div className={this.props.loginClass}>
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
        <button onClick={this.props.hideLogin}>x</button>
      </div>
    )
  }
}

export default Login;