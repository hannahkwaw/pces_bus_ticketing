import React from "react";
const Confirmation = () => {
  return (
    <div>
      <div className="registration">
        <div className="headertext">User registration</div>
        <div className="form">
          <label>First Name</label>
          <input type="text" placeholder="Enter first name" />
          <label>Surname</label>
          <input type="text" placeholder="Enter surname" />
          <label>Telephone number</label>
          <input type="text" placeholder="Enter telephone number" />
          <label>Address</label>
          <input type="password" placeholder="Enter address" />
          <label>City</label>
          <input type="password" placeholder="Enter city" />
          <label>Postal code</label>
          <input type="password" placeholder="Enter postal code" />
          <label>Country</label>
          <input type="password" placeholder="Enter country" />
          <div className="terms">
            <input type="checkbox" /> I agree to the terms and conditions
            <a href="#" className="terms-link">
              Terms and conditions for use
            </a>
          </div>

          <button className="confirm-button">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
