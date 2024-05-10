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
    <div className="items-center justify-center text-center text-4xl py-8">
      Cart <h1>No Items In Cart</h1>
    </div>
  );
};

export default Cart;
