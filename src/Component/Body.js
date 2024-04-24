import Restaurent from "./Restaurent";
import resList from "../Utils/mockData";
import React, { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
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
