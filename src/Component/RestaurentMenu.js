import React from "react";
import Shimmer from "./Shimmer";
import { useState } from "react";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const RestaurentMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);
  if (resInfo === null) return <Shimmer />;

  const name = resInfo?.cards[2]?.card?.card?.info?.name || "";
  const cuisines = resInfo?.cards[2]?.card?.card?.info?.cuisines || "";
  const costForTwoMessage =
    resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage || "";

  const items =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card
      ?.itemCards || [];

  console.log(useOnlineStatus);

  if (useOnlineStatus == false) <h1>Oops,Kindly Check Your Internet</h1>;
  return (
    <div>
      <h1>Menu</h1>
      <h2>{name}</h2>
      <p>
        {cuisines} - {costForTwoMessage}
      </p>
      <ul>
        {/* {items.map(item)=>(<h2 key={index}>{item.card.info.category}} */}
        {items.map((item, index) => (
          <li key={index}>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
