import React from "react";
const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?size=626&ext=jpg&ga=GA1.1.1795315793.1704549022&semt=ais"
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