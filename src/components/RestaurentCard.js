// "use strict";
import React from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurentCard = (props) => {
  const { res_Data } = props;
  console.log("res_Data" + res_Data);
  const { name, cuisines, cloudinaryImageId, avgRating, sla } =
    res_Data?.info;

    const status = useOnlineStatus();
  if (status === false) return <h1> Seems like you are offline!!! </h1>
  return (
    <div className="  w-48 p-2 m-2    rounded-xl" >
      <img
        className="res-logo w-48 h-44 object-cover rounded-xl border border-gray-500 shadow-slate-950"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
         
            +
          cloudinaryImageId
        }
        alt = "images of restaurents"
      />
      
      <div className=" flex-col p-2 m-2 text-wrap text-left h-56">
        <h4 className=" font-bold">{name}&nbsp;</h4>
        
        <p>{cuisines.join(", ")}&nbsp;</p>

        <span className="star-rating">
          <h5>{avgRating} ⭐&nbsp;</h5>
          <h5>{sla.deliveryTime} minutes.&nbsp;</h5>
        </span>

      </div>
    </div>
  );

};



export default RestaurentCard;

// export const backButtonComponent = (RestaurentCard) => {
//   console.log(RestaurentCard);
// return (...props) => {
//   return (
//     <div>
//       <label>👈</label>
//       <RestaurentCard {...props}/>
//     </div>
//   )
// }
// }
