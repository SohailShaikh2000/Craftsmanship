import { useState } from "react";
import "../styles/Header.scss";
import  Menu from '../assets/Menu.svg'

const Header = () => {
const [mobileNavOpen, setMobileNavOpen] = useState(false)
  return (
    <div className="header-container">
      <div className="header-logo">
        <h2>Heritage</h2>
      </div>
      <div className="header-menu-desktop">
        <div className="header-nav">
          <nav>
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </nav>
        </div>
        <div className="login-container">
          <button>Sign Up</button>
          <h4>Log in</h4>
        </div>
      </div>
      <div
        className="header-menu-mobile"
        style={mobileNavOpen ? { display: "block" } : { display: "none" }}
      >
        <div className="header-nav">
          <nav>
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </nav>
        </div>
        <div className="login-container">
          <button>Sign Up</button>
          <h4>Log in</h4>
        </div>
        <button className="close" onClick={() => setMobileNavOpen(false)}>
          close
        </button>
      </div>
      <img
        src={Menu}
        alt="Menu"
        onClick={() => setMobileNavOpen(true)}
        className="mobile-nav-toggle-button"
      />
    </div>
  );
};

export default Header;
