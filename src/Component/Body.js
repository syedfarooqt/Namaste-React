import Restaurent from "./Restaurent";
import resList from "../Utils/mockData";
import React, { useState, useEffect } from "react";
import { SWIGGY_URL } from "../Utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("printed data started");
    console.log(SWIGGY_URL);

    const data = await fetch(SWIGGY_URL);
    const json = await data.json();
    //option chaining
    const result =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(result);
    console.log("printed data completed");
    // const json = await data.json;
    setListOfRestaurants(result);
  };
  return (
    <div className="body">
      <div className="search">
        <input className="search-input"></input>
        <button className="search-button">Search</button>
      </div>
      <button
        className="rating-filter-btn"
        onClick={() => {
          const filteredData = listOfRestaurants.filter(
            (res) => res.info.avgRatingString > 4
          );
          setListOfRestaurants(filteredData);
        }}
      >
        TOP Rated Restaurent
      </button>
      <div className="restaurent-container">
        {listOfRestaurants.map((restaurent) => (
          <Restaurent key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
