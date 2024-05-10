import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurentCategory = ({
  res,
  key,
  showCategory,
  setShowIndex,
  arrow,
  expandedIndex,
  setExpandedIndex,
}) => {
  //   const [showCategory, setShowCategory] = useState(false);
  //   const [arrow, setArrow] = useState("⮟");
  const handleClick = () => {
    // setShowIndex();
    // setShowIndex();
    if (expandedIndex === res.id) {
      setExpandedIndex(null);
      setShowIndex(null);
    } else {
      // Otherwise, toggle the expanded state
      setExpandedIndex(res.id);
      setShowIndex(res.id);
    }
    // setArrow(); // Toggling showCategory stat
    // showCategory ? setArrow("⮟") : setArrow("⮝");
  };
  return (
    <div className=" w-9/12 m-auto  bg-gray-100 shadow-xl border-b-2  from-neutral-600 hover:cursor-pointer p-4">
      {/** header*/}
      {/** body-name,price,image*/}
      <div
        className="flex flex-wrap  justify-between font-extrabold"
        onClick={handleClick}
      >
        <span className="">
          {res.title}({res.itemCards.length})
        </span>
        <span>{arrow}</span>
      </div>
      {showCategory && <ItemList res={res.itemCards} />}
    </div>
  );
};

export default RestaurentCategory;
