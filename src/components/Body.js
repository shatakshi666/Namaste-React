import React, { useState } from "react";
import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import { SWIGGY_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useRef } from "react";

const Body = () => {
  const [listOfRestaurents, setlistOfRestaurents] = useState(null);
  const [input, setInput] = useState(null);
  const [filteredRestaurent, setfilteredRestaurent] = useState([]);
  const [searchState, setSearchState] = useState("Search");
  const nameRef = useRef("");
  // const [rating, setRating] = useState(null);
  const filterHandler = () => {
    // <Header/>
    // setClicked(true);
    setfilteredRestaurent(
      listOfRestaurents.filter((rest) => rest.info.avgRating > 4.2)
    );

    // console.log(clicked);
  };
  // setClicked(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);

    const json_converted = await data.json();
    console.log(json_converted);

    const arr1 =
      json_converted?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(arr1);
    setlistOfRestaurents(arr1);

    setfilteredRestaurent(
      json_converted?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const status = useOnlineStatus();
  if (status === false) return <h1> Seems like you are offline!!! </h1>;

  return (
    <>
      <div className="flex py-2 m-2 justify-center">
        <div p-4 m-4>
          <input
            className="px-3 py-2 m-2 border border-solid border-black w-96 rounded-xl"
            type="input"
            placeholder="Enter name of restaurent : "
            value={input}
            ref={nameRef}
            onChange={() => {
              setInput(nameRef?.current?.value);

              setfilteredRestaurent(
                listOfRestaurents.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(nameRef.current.value.toLocaleLowerCase())
                )
              );
              if (nameRef.current.value === null) {
                setfilteredRestaurent(listOfRestaurents);
              }
            }}
          />

          <button
            className="px-3 py-2 m-2 border bg-green-600 rounded-lg"
            // onClick={() => {

            //   setfilteredRestaurent(
            //     listOfRestaurents.filter((res) =>
            //       res.info.name.toLowerCase().includes(input.toLocaleLowerCase())
            //     )
            //   );
            // }}
          >
            Search
          </button>
        </div>
      </div>
      <div className=" left-10">
        <button
          className="px-3 py-2 m-2 my-4 border-hidden  border bg-green-600 rounded-lg font-bold"
          onClick={filterHandler}
        >
          Show ⭐⭐⭐⭐Rated
        </button>
        {filteredRestaurent != listOfRestaurents && !!listOfRestaurents && (
          <button onClick={() => setfilteredRestaurent(listOfRestaurents)}>
            Clear Filter
          </button>
        )}
      </div>
      <center>
        <div className=" justify-center items-center">
          <div className="grid grid-cols-5 p-4 m-4 mx-auto border rounded-lg self-center justify-center items-center">
            {filteredRestaurent.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
              >
                {/* {true ? <ImprovedCard res_Data={restaurant} /> : <RestaurentCard res_Data={restaurant} />} */}
                <RestaurentCard res_Data={restaurant} />
              </Link>
            ))}
          </div>
        </div>
      </center>
    </>
  );
};

export default Body;
