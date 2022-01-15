import React from "react";

const Login = () => {
  return (
    <div>
      <div className="login">
        <div className="headertext">Login</div>
        <div className="form">
          <label>E-mail</label>
          <input type="text" placeholder="Enter valid e-mail" />
          <label>Password</label>
          <div className="password">
            <input type="password" placeholder="Enter password" />
          </div>
        </div>
        <div className="login_buttons">
          <button className="login-button">Login</button>
          <button className="register-button">Register</button>
          <a href="#" className="forgot_password">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
