import React from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          
          <img
            className="logo"
            src={ LOGO_URL }
            alt="logo"
          />
        </div>
  
        <div className="nav-container">
          <ul className="list-container">
            <li className="list">Home</li>
            <li className="list">About Us</li>
            <li className="list">Contact Us</li>
            <li className="list">Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;