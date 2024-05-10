import Restaurent from "./Restaurent";
import React, { useState, useEffect } from "react";
import { SWIGGY_URL } from "../Utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { IsPromotedRestaurent } from "./Restaurent";
import userDetail from "../Utils/UserDetail";
import { useContext } from "react";

const Body = () => {
  const { Name, setUserName } = useContext(userDetail);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurents, setFilteredRestaurents] = useState([]);
  const [topRestaurent, setTopRestaurent] = useState("TOP Rated Restaurent");
  const [restaurentSerachBar, setRestaurentSerachBar] = useState("");
  const PromotedRestaurent = IsPromotedRestaurent(Restaurent);
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
    // console.log(json?.data?.cards[4]?.card?.card?.gridElements);

    // console.log(result);
    setListOfRestaurants(result);
    setFilteredRestaurents(result);
  };

  // console.log(listOfRestaurants.length);
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex flex-wrap px-2">
        <input
          className="flex border border-gray-400  border-solid  px-2  m-2 ml-5"
          value={restaurentSerachBar}
          onChange={(e) => {
            setRestaurentSerachBar(e.target.value);
          }}
        ></input>
        <button
          className="flex border border-gray-400  border-solid  px-2  m-2 ml-5"
          onClick={() => {
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
        <button
          className="flex flex-wrap  border border-gray-400  border-solid  px-2  m-2 ml-5"
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
        <input
          className="border border-black m-1 p-1"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          value={Name}
        ></input>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurents.map((restaurent) => (
          <Link
            key={restaurent.info.id}
            to={"/restaurent/" + restaurent.info.id}
          >
            {restaurent.info.isOpen ? (
              <PromotedRestaurent resData={restaurent} />
            ) : (
              <Restaurent resData={restaurent} />
            )}
            {/* <Restaurent resData={restaurent} /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
