import { Link } from "react-router-dom";
import { LOGO_URL, CART_URL } from "../Utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginButton, setLoginButton] = useState("login");
  // useEffect(() => {
  //   console.log("hello Namaste");
  // });
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img alt="AR-Food-logo" className="ar-logo" src={LOGO_URL} />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Enquiry</Link>
          </li>
          <li>
            <img className="cart-icon" alt="cart" src={CART_URL} />
            Cart
          </li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                loginButton === "login"
                  ? setLoginButton("logout")
                  : setLoginButton("login");
              }}
            >
              {loginButton}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
