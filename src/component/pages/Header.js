import React from "react";
import "./Header.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaShoppingCart, FaTwitter, FaYoutube } from 'react-icons/fa'; // Import cart icon

const Header = () => {
  return (
    <header className="header">
  {/* Left Section: Logo and Title */}
  <div className="header-left">
    <img
      src={require("../../Assets/logo-4.jpg")}
      alt="Logo"
      className="logo"
    />
    <h2 className="title-name">ROYAL HOTEL</h2>
  </div>

  {/* Right Section: Social Links */}
  <div className="social-icons">
    <a href="#facebook" className="social-icon" aria-label="Facebook">
      <FaFacebook />
    </a>
    <a href="#twitter" className="social-icon" aria-label="Twitter">
      <FaTwitter />
    </a>
    <a href="#linkedin" className="social-icon" aria-label="LinkedIn">
      <FaLinkedin />
    </a>
    <a href="#instagram" className="social-icon" aria-label="Instagram">
      <FaInstagram />
    </a>
    <a href="#youtube" className="social-icon" aria-label="YouTube">
      <FaYoutube />
    </a>
  </div>
</header>

  );
};

export default Header;