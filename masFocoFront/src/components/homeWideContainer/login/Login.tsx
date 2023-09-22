import React from 'react';
import LoginButton from '../../utils/button/AccessButton/AccessButton';
const Login = (props: any) => {
  return (
    <div className="access-container">
      <h2>Welcome back!</h2>
      <div className="input-group">
        <input type="text" name="text" className="access-input" required="true" />
        <label className="user-label">Username</label>
      </div>
      <div className='password-section'>
        <div className="input-group">
          {// @ts-ignore
          }
          <input type="password" name="text" className="access-input" required="true" />
          <label className="user-label">Password</label>
        </div>
        <a href="#" className="frg-pass">Forgot password?</a>
      </div>
      <LoginButton color="black" width="17rem" text="Login" />
      <p className="register-link">Not a member? <a href="register">Register NOW!</a></p>
    </div>
  );
}

export default Login;