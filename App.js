import React from "react";
import ReactDOM from "react-dom/client";

//Heading
//body
//footer

//Rem:mention className in small letter,common industry std

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        alt="AR-Food-logo"
        className="ar-logo"
        src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent.png"
      />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Enquiry</li>
        <li>
          <img
            className="cart-icon"
            alt="cart"
            src="https://t3.ftcdn.net/jpg/03/14/84/68/360_F_314846831_5jJsC7Us9obgwMjRDqFhs04dodzvnZvi.jpg"
          />
          Cart
        </li>
      </ul>
    </div>

    <h1 className=""></h1>
  </div>
);

const Restaurent = () => (
  <div className="restaurent-card">
    <img
      className="restaurent-card-img"
      alt="Noor hotel"
      src="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/09/veg-biryani-vegetable-biryani.jpg"
    />
    <div className="restaurent-card-text">
      <h3>Noor Hotel</h3>
      <h4>Biryani,Chicken Roll</h4>
      <h4>4.5 Rating</h4>
      <h4>30 mins</h4>
    </div>
  </div>
);

const Body = () => (
  <div className="body">
    <div className="search">
      <input className="search-input"></input>
      <button className="search-button">Search</button>
    </div>
    <div className="restaurent-container">
      <Restaurent />
      <Restaurent />
      <Restaurent />
      <Restaurent />
      <Restaurent />
      <Restaurent />
      <Restaurent />
      <Restaurent />
      <Restaurent />
      <Restaurent />
      <Restaurent />
      <Restaurent />
    </div>
  </div>
);

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section">
        <h4>Copyright</h4>
      </div>
      <div className="footer-section">
        <h4>Links</h4>
      </div>
      <div className="footer-section">
        <h4>Address :</h4>
        <h5>Guindy, Chennai, TN</h5>
        <h5>1234567891</h5>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
