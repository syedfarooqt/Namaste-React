import React from "react";
import Shimmer from "./Shimmer";
import { useState } from "react";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurentCategory from "./RestaurentCategory";
import { restMenuListUrl } from "../Utils/constants.tsx";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [arrow, setArrow] = useState(null);

  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <Shimmer />;

  const name = resInfo?.cards[2]?.card?.card?.info?.name || "";
  const cuisines = resInfo?.cards[2]?.card?.card?.info?.cuisines || "";
  const costForTwoMessage =
    resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage || "";

  const catagories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (val) => val.card?.card?.["@type"] === restMenuListUrl
    );
  // console.log(catagories);
  // const items =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card
  //     ?.itemCards || [];

  const items = resInfo?.cards;

  console.log("resInfo items : " + resInfo);
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold p-4">{name}</h2>
      <p className="text-base font-bold p-4">
        {cuisines} - {costForTwoMessage}
      </p>
      <div>
        {/* {items.map(item)=>(<h2 key={index}>{item.card.info.category}}
        {items.map((item) => (
          <div>{item.card.info.name}</div>
        ))} */}
        {catagories.map((catagories, index) => (
          <RestaurentCategory
            key={index}
            res={catagories?.card?.card}
            // showCategory={if(index == showIndex){return true}else{returnfalse}}
            showCategory={(function () {
              if (index === showIndex) {
                return true;
              } else {
                return false;
              }
            })()}
            arrow={index == showIndex ? "🔝" : "🔻"}
            setShowIndex={() => setShowIndex(index)}
            expandedIndex={expandedIndex}
            setExpandedIndex={setExpandedIndex}
            // setArrow={() => setArrow(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurentMenu;
