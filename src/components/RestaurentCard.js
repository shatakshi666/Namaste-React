"use strict";
import React from "react";
import { CDN_URL } from "../utils/constants";
// import ReactDOM from "react-dom/client";
const RestaurentCard = (props) => {
  const { res_Data } = props;

  const { name, cuisines, cloudinaryImageId, avgRatingString, sla } =
    res_Data?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
         
            +
          cloudinaryImageId
        }
        alt = "images of restaurents"
      />
      {console.log(
           CDN_URL  +
          cloudinaryImageId
        )}
      <div className="res-details">
        <h4>{name}&nbsp;</h4>

        <h5>{cuisines.join(", ")}&nbsp;</h5>

        <span className="star-rating">
          <h5>{avgRatingString} ⭐&nbsp;</h5>
          <h5>{sla.deliveryTime} minutes.&nbsp;</h5>
        </span>

      </div>
    </div>
  );
};

export default RestaurentCard;
