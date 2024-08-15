import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [login, setLogin] = useState("Login");

  const status = useOnlineStatus();

    
  return (
    <div className="flex justify-between bg-cyan-600 items-center p-4 m-4 shadow-md shadow-black">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL} alt="logo"/>
      </div>

    <div className="p-4 m-4 ">
        <ul className="flex">
          <li className="p-2 font-medium">Online Status : {status ? "✅" : "🔴"}</li>
          <li className="p-2"><Link to="/" >Home</Link></li>
          <li className="p-2"><Link to="/about">About Us</Link></li>
          <li className="p-2"><Link to="/contact">Contact Us</Link></li>
          <li className="p-2">Cart</li>
          <li className="p-2">
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
