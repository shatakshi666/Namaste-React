import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [login, setLogin] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>

      <div className="nav-container">
        <ul className="list-container">
          <li className="list"><Link to="/" >Home</Link></li>
          <li className="list"><Link to="/about">About Us</Link></li>
          <li className="list"><Link to="/contact">Contact Us</Link></li>
          <li className="list">Cart</li>
          <li className="list">
            <button
              className="login-btn"
              
              onClick={() => {
                login === "Login" ? setLogin("Logout") : setLogin("Login");
              }}
            >
              {login}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
