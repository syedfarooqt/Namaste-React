import { useDispatch } from "react-redux";
import { CDN_URL } from "../Utils/constants";
import { AddItemToCart } from "../Utils/cartSlice";
useDispatch;
const ItemList = ({ res }) => {
  const dispatch = useDispatch();

  const handleAddItem = (r) => {
    console.log();
    dispatch(AddItemToCart(r));
  };
  return (
    <div className="border-b-2 font-semibold flex flex-wrap  justify-between">
      <div className="flex flex-wrap">
        {res.map((r) => (
          <div className="border-b-2 border-solid border-gray-200 flex flex-wrap  justify-between">
            <div className="w-9/12 ">
              <span className="font-bold text-md">{r?.card?.info?.name} </span>

              <span className="font-bold text-md">
                ₹
                {r?.card?.info?.price
                  ? r?.card?.info?.price / 100
                  : r?.card?.info?.defaultPrice / 100}{" "}
              </span>
              <div>
                <span className="text-sm font-normal">
                  {r?.card?.info?.description}
                </span>
              </div>
            </div>
            <div className="w-3/12 ">
              <label
                className="absolute border bg-black text-white rounded-lg px-1 mx-10 hover:cursor-pointer"
                onClick={() => {
                  console.log("clicked");
                  handleAddItem(r);
                }}
              >
                + Add
              </label>

              <img
                className=" rounded-xl p-2 "
                src={
                  CDN_URL + r?.card?.info?.imageId
                    ? CDN_URL + r?.card?.info?.imageId
                    : CDN_URL + r?.card?.info?.imageId
                }
              ></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ItemList;
