import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const element = <FontAwesomeIcon icon={faEyeSlash} />;
const Registration = () => {
  return (
    <div>
      <div className="registration">
        <div className="headertext">User registration</div>
        <div className="form">
          <label>E-mail</label>
          <input type="text" placeholder="Enter valid e-mail" />
          <label>Confirm Email</label>
          <input type="text" placeholder="Confirm e-mail" />
          <label>Password</label>
          <div className="password">
            <input type="password" placeholder="Enter password" />
            <FontAwesomeIcon className="icon" icon={faEyeSlash} />
          </div>
          <label>Confirm Password</label>{" "}
          <div className="password">
            <input type="password" placeholder="Confirm password" />
            <FontAwesomeIcon className="icon" icon={faEyeSlash} />
          </div>
          <button>Next Step</button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
