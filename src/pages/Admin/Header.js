import React from "react";
import "./Header.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      {/* Left Section: Logo and Title */}
      <div className="header-left">
        <a href="/" className="logo-link">
          <img
            src={require("../../Assets/logo-4.jpg")}
            alt="Royal Hotel Logo"
            className="logo"
          />
        </a>
        <h1 className="title-name">ROYAL HOTEL</h1>
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
