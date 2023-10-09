import React from "react";
import RegisterButton from "../../../utils/button/AccessButton/AccessButton";
import { Link } from "react-router-dom";
const Register = (props: any) => {
  return (
    <div className="access-container">
      <h2>New Member</h2>
      <div className="input-group">
        <input
          type="text"
          name="text"
          className="access-input"
          required={true}
        />
        <label className="user-label">Username</label>
      </div>
      <div className="input-group">
        <input
          type="text"
          name="text"
          className="access-input"
          required={true}
        />
        <label className="user-label">Email</label>
      </div>
      <div className="password-section">
        <div className="input-group">
          <input
            type="password"
            name="text"
            className="access-input"
            required={true}
          />
          <label className="user-label">Password</label>
        </div>
        <div className="input-group" id="confirm-pssw">
          <input
            type="password"
            name="text"
            className="access-input"
            required={true}
          />
          <label className="user-label">Confirm password</label>
        </div>
      </div>
      <RegisterButton color="black" width="17rem" text="Register" />
      <p className="register-link">
        Are you a member? <Link to="/">Login NOW!</Link>
      </p>
    </div>
  );
};

export default Register;
