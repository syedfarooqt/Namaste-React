import Restaurent from "./Restaurent";
import React, { useState, useEffect } from "react";
import { SWIGGY_URL } from "../Utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurents, setFilteredRestaurents] = useState([]);
  const [topRestaurent, setTopRestaurent] = useState("TOP Rated Restaurent");
  const [restaurentSerachBar, setRestaurentSerachBar] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);
    const json = await data.json();
    //option chaining
    const result =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(result);
    setListOfRestaurants(result);
    setFilteredRestaurents(result);
  };

  console.log(listOfRestaurants.length);
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search">
        <input
          className="search-input"
          value={restaurentSerachBar}
          onChange={(e) => {
            setRestaurentSerachBar(e.target.value);
          }}
        ></input>
        <button
          className="search-button"
          onClick={() => {
            console.log("restaurentSerachBar" + restaurentSerachBar);
            const filteredData = listOfRestaurants.filter((res) =>
              res.info.name
                .toLowerCase()
                .includes(restaurentSerachBar.toLowerCase())
            );
            setFilteredRestaurents(filteredData);
          }}
        >
          search
        </button>
      </div>
      <button
        className="rating-filter-btn"
        onClick={() => {
          let filteredData = listOfRestaurants.filter(
            (res) => res.info.avgRatingString > 4
          );
          if (topRestaurent === "TOP Rated Restaurent") {
            setTopRestaurent("SEE ALL RESTAURENT");
            setFilteredRestaurents(filteredData);
          } else {
            setTopRestaurent("TOP Rated Restaurent");
            setFilteredRestaurents(listOfRestaurants);
          }
        }}
      >
        {topRestaurent}
      </button>
      <div className="restaurent-container">
        {filteredRestaurents.map((restaurent) => (
          <Link
            key={restaurent.info.id}
            to={"/restaurent/" + restaurent.info.id}
          >
            <Restaurent resData={restaurent} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
