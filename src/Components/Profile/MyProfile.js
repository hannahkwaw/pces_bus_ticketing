import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  return (
    <div className="profile_page">
      <div className="profile_nav">
        <ul>
          <li>
            <a href="#">Cards</a>
          </li>
          <li>
            <a href="#">Cards History</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faSignOutAlt} className="logout" />
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
      <div className="profile">
        <div className="add_profile"><h1>Add a card</h1></div>
        <FontAwesomeIcon icon={faPlusCircle} className="plus_circle" />
      </div>
    </div>
  );
};

export default Profile;
