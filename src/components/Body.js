import React, { useState } from "react";
import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import { pathOr } from "ramda";
import { PATH_FILTERED, PATH_ORIGINAL, SWIGGY_API } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurents, setlistOfRestaurents] = useState([]);
  const [input, setInput] = useState("");
  const [filteredRestaurent, setfilteredRestaurent] = useState([]);
  const [searchState, setSearchState] = useState("Search");

  const filterHandler = () => {
    setlistOfRestaurents(
      listOfRestaurents.filter((rest) => rest.info.avgRating > 4.0)
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);

    const json_converted = await data.json();

    const l1 = pathOr("N/A", PATH_ORIGINAL, json_converted);
    const l2 = pathOr("N/A", PATH_FILTERED, json_converted);
    console.log(l1);
    console.log(l2);
    // console.log("new format");

    setlistOfRestaurents(pathOr("N/A", PATH_ORIGINAL, json_converted));
    setfilteredRestaurent(pathOr("N/A", PATH_FILTERED, json_converted));
  };

  return (
    <div className="body">
      <button className="filter-btn" onClick={filterHandler}>
        Top Restaurents
      </button>

      <input
        type="input"
        placeholder="Enter name of restaurent : "
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          console.log(input);
        }}
      />
      <button
        className="filter-btn"
        onClick={() => {
          setfilteredRestaurent(
            listOfRestaurents.filter((res) =>
              res.info.name.toLowerCase().includes(input.toLocaleLowerCase())
            )
          );
          setInput("");
          {
            searchState === "Search"
              ? setSearchState("Go back")
              : setSearchState("Search");
          }
         
        }}
      >
        {searchState}
      </button>

      <div className="res-container">
        {
          //   (filteredRestaurent.length === 0 ) ? <h1>Item not found.</h1>
          //  :
          filteredRestaurent.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
                           
              <RestaurentCard res_Data={restaurant} />
              
            </Link>
            
           
          ))
        }
      </div>
    </div>
  );
};

export default Body;
