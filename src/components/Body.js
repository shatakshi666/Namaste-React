import React, { useState } from "react";
import RestaurentCard from "./RestaurentCard";
import res_data from "../utils/mock-data";
import { useState } from "react";
const Body = () => {
    const [listOfRestaurents, setlistOfRestaurents] = useState(res_data);
    const filterHandler = () => {
        setlistOfRestaurents(listOfRestaurents.filter((rest)=>rest.info.avgRating > 4.0));
    }
    return (
      <div className="body">
        <button className="filter" onClick={filterHandler}>Top Restaurents</button>
  
        <div className="res-container">
          {listOfRestaurents.map( (restaurant) => (
            <RestaurentCard
              res_Data={restaurant}
              
            />
          ))}
        </div>
      </div>
    );
  };

  export default Body;