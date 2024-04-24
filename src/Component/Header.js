import { LOGO_URL, CART_URL } from "../Utils/constants";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img alt="AR-Food-logo" className="ar-logo" src={LOGO_URL} />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Enquiry</li>
        <li>
          <img className="cart-icon" alt="cart" src={CART_URL} />
          Cart
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
