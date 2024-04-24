import { CDN_URL } from "../Utils/constants";

const Restaurent = (props) => {
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
    <div className="restaurent-card">
      <img
        className="restaurent-card-img"
        alt="food image"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="restaurent-card-text">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRatingString} rating</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} mins</h4>
      </div>
    </div>
  );
};

export default Restaurent;
