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
        <div className='delete-button-container'>
          <button 
            className='delete-button' 
            onClick={this.props.hideLogin}
          >
          x
          </button>
        </div>          
        <form className='sign-up'>
          <h1>Sign Up</h1>
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
          <button>Submit</button>
        </form>
        <div className='border'></div>
        <form className='login'>
          <h1>Login</h1>
          <input
            type='text'
            placeholder='Username'
          />
          <input
            type='text'
            placeholder='Password'
          />
          <button>Submit</button>          
        </form>
      </div>
    )
  }
}

export default Login;