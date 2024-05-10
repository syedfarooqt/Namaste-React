import { useContext } from "react";
import { CDN_URL } from "../Utils/constants";
import useOnlineStatus from "../Utils/useOnlineStatus";
import userDetail from "../Utils/UserDetail";

const Restaurent = (props) => {
  const data = useContext(userDetail);
  const { Name } = data;
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    cloudinaryImageId,
    sla: { deliveryTime },
  } = resData?.info;
  //other distrcturing above have done in line destructing
  //const { deliveryTime } = sla;

  return (
    <div className="w-60 p-2 m-1  border-solid border bg-gray-100 hover:bg-gray-200">
      <div className="w-30">
        <img className="" alt="food image" src={CDN_URL + cloudinaryImageId} />
      </div>
      <div>
        <h3 className="font-bold">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRatingString} rating</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} mins</h4>
        <h4>{Name}</h4>
      </div>
    </div>
  );
};

export const IsPromotedRestaurent = (Restaurent) => {
  return (props) => {
    return (
      <div>
        <label className="absolute border border-solid border-black bg-black text-white px-2 mx-2 rounded-lg ">
          Open
        </label>
        <Restaurent {...props} />
      </div>
    );
  };
};

export default Restaurent;
