import React from 'react';
import "./Login.css"
import LoginButton from '../../utils/button/LoginButton/LoginButton';
class Login extends React.Component {
  render() {
    return (
      <div className="loginContainer">
        <h2>Login</h2>
        <div className="input-group">
          <input type="text" name="text" className="access-input" />
          <label className="user-label">Username</label>
        </div>
        <div className='passwordSection'>
          <div className="input-group">
            <input type="text" name="text" className="access-input" />
            <label className="user-label">Password</label>
          </div>
          <a href="#" className="frgPass">Forgot password?</a>
        </div>
        <LoginButton color="black" width="17rem" />
        <p className="registerLink">Not a member? <a href="#">Register NOW!</a></p>
      </div>
    );
  }
}

export default Login;