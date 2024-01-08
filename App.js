"use strict";
import React from "react";
import ReactDOM from "react-dom/client";

// Structure of App :
/*
Header
  -logo 
  -links (navitems)
Body 
  -Search
  -Restaurent Container
    -RestroCard

Footer
  -Copyright
  -link
  -ContactUs
  -Address


*/
// Making components:
const RestaurentDetails = () => {
  return (
    <div className="res-details">
      <h3>Chef's Corner</h3>
      <h5>North Indian, Chinese, Punjabi dishes</h5>
      <h5>4.6 stars</h5>
      <h5>Get in 48 mins</h5>
    </div>
  )
}
const RestaurentCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cd832b6167eb9f88aeb1ccdebf38d942"
      />

      <RestaurentDetails/>
    </div>
  );
};
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
const Body = () => {
  return (
    <div className="body">
      
      <div className="search">Search</div>
      
      <div className="res-container">
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
           
        
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
