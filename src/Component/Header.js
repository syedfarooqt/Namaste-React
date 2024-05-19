import { LOGO_URL } from "../Utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import userDetail from "../Utils/UserDetail";
import { useSelector } from "react-redux";
import lightThemeImage from "../Utils/ligthTheme.png";
import darkThemeImage from "../Utils/nightTheme.png";
const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const [isRight, setIsRight] = useState(false);

  const handleClick = () => {
    setIsRight(!isRight);
  };

  const { Name } = useContext(userDetail);
  const val = useOnlineStatus();
  const [loginButton, setLoginButton] = useState("login");
  // useEffect(() => {
  //   console.log("hello Namaste");
  // });
  return (
    <div className="flex flex-wrap bg-amber-300 justify-between items-center	">
      <div className="flex items-center	 ">
        <Link to="/">
          <img alt="AR-Food-logo" className="w-40" src={LOGO_URL} />
        </Link>
      </div>

      <div className="flex flex-wrap">
        <div className="w-6 " onClick={handleClick}>
          {isRight ? (
            <img src={lightThemeImage} alt="Light Theme" />
          ) : (
            <img src={darkThemeImage} alt="night Theme" />
          )}
        </div>
        <ul className="flex flex-wrap underline ">
          <li>
            {val ? <h1 className="px-4 ">📗 Online</h1> : <h1>🟥 Offline</h1>}
          </li>
          <li>
            <Link className="px-4" to="/Grocery">
              Grocery Store
            </Link>
          </li>
          <li>
            <Link className="px-4" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="px-4" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="px-4" to="/contact">
              Enquiry
            </Link>
          </li>
          <li className="px-4 flex">
            <Link className="px-4" to="/cart">
              Cart({cartItems.length})
            </Link>
          </li>
          <li>
            <button
              className="border border-gray-950  border-solid  px-4 py-1 mx-2 md-5"
              onClick={() => {
                loginButton === "login"
                  ? setLoginButton("logout")
                  : setLoginButton("login");
              }}
            >
              {loginButton}
            </button>
          </li>
          <li className="px-4 flex ">{Name} </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
