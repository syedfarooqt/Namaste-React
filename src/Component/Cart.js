import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";
const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  console.log(items);
  return items.length != 0 ? (
    <div className="p-4 m-auto font-bold text-xl w-6/12 items-center flex flex-wrap justify-center">
      <div className="items-center justify-center text-center text-4xl py-8">
        Cart
      </div>
      <div className="items-center justify-center ">
        <ItemList res={items} />
      </div>
    </div>
  ) : (
    <span className="items-center justify-center text-center  py-8">
      <div className="items-center justify-center text-center text-4xl py-8">
        Cart
      </div>
      <h1 className="text-xl">No Items In Cart</h1>
    </span>
  );
};

export default Cart;
