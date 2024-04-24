import Restaurent from "./Restaurent";
import resList from "../Utils/mockData";

const Body = () => (
  <div className="body">
    <div className="search">
      <input className="search-input"></input>
      <button className="search-button">Search</button>
    </div>
    <div className="restaurent-container">
      {resList.map((restaurent) => (
        <Restaurent key={restaurent.info.id} resData={restaurent} />
      ))}
    </div>
  </div>
);

export default Body;
