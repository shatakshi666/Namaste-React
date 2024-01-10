"use strict";
import React from "react";
// import ReactDOM from "react-dom/client";
const RestaurentCard = (props) => {
  const {res_Data} = props;
  
  const { name, cuisines, cloudinaryImageId, avgRatingString, sla } = res_Data?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
          + cloudinaryImageId
        }
      />

      <div className="res-details">
        <h3>{name}</h3>
        <h5>{ cuisines.join(", ")}</h5>
        <h5>{avgRatingString} stars</h5>
        <h5>{sla.deliveryTime} minutes</h5>
      </div>
    </div>
  );
};

export default RestaurentCard;