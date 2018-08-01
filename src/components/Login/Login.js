import React, { Component } from 'react';
import { auth, provider } from '../../firebase';
import googleLogo from '../../assets/google-logo.png';
import './Login.css';
import PropTypes from 'prop-types';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'hidden',
      user: null
    };

    this.login = this.login.bind(this);
  }

  toggleLogIn = () => {
    return (
      <div className="wrapper">
        <h3 className="title">Sign In With Google</h3>
        {this.state.user ?
          <button className="google-login" onClick={(event) => {
            this.logout(event);
          }}>
            Log Out
          </button>
          :
          <button className="google-login" onClick={(event) => {
            this.login(event);
          }}>
            <img src={googleLogo} alt="google logo" className="google-logo" />
          </button>
        }
      </div>
    );
  }

  login(event) {
    event.preventDefault();
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        const gamer_tag = user.displayName;
        fetch('https://exordium-backend.herokuapp.com/api/v1/users', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({ user: { gamer_tag, level_id: 1 } })
        }).catch(error => {
          console.log(error);
        });
        this.setState({
          user: user.displayName
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  logout = () => {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }

  render() {
    return (
      <div className={this.props.loginClass}>
        <div className='delete-button-container'>
          <button
            className='delete-button'
            onClick={this.props.hideLogin}
          >
            X
          </button>
        </div>
        <form className='sign-up'>
          {this.toggleLogIn()}
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  hideLogin: PropTypes.func,
  loginClass: PropTypes.string,
};

export default Login;