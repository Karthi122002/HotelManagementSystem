import React, { useState } from "react";
import "./Menu.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Menu({ onMenuClick, onButtonClick, activePage }) {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu open and close state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle menu item click
  const handleMenuClick = (page) => {
    if (page === "Login" || page === "Signup") {
      onButtonClick(page);
    } else {
      onMenuClick(page); // Update active page
    }
    toggleMenu(); // Close the menu on selection
  };

  return (
    <nav className="menu-container">
      <div className="menu-bar d-flex justify-content-between align-items-center">
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Menu Links */}
      <div className={`menu-links ${isOpen ? "show-menu" : ""}`}>
        <span
          className={`menu-link ${activePage === "Home" ? "active" : ""}`}
          onClick={() => handleMenuClick("Home")}
        >
          HOME
        </span>
        <span
          className={`menu-link ${activePage === "ABOUT" ? "active" : ""}`}
          onClick={() => handleMenuClick("ABOUT")}
        >
          ABOUT
        </span>
        <span
          className={`menu-link ${activePage === "SERVICES" ? "active" : ""}`}
          onClick={() => handleMenuClick("SERVICES")}
        >
          SERVICES
        </span>
        <span
          className={`menu-link ${activePage === "ROOMS" ? "active" : ""}`}
          onClick={() => handleMenuClick("ROOMS")}
        >
          ROOMS
        </span>
        <span
          className={`menu-link ${activePage === "OURTEAM" ? "active" : ""}`}
          onClick={() => handleMenuClick("OURTEAM")}
        >
          OUR TEAM
        </span>
        <span
          className={`menu-link ${activePage === "CONTACT" ? "active" : ""}`}
          onClick={() => handleMenuClick("CONTACT")}
        >
          CONTACT
        </span>
        <span
          className={`menu-link ${activePage === "LOGIN" ? "active" : ""}`}
          onClick={() => handleMenuClick("Login")}
        >
          LOGIN
        </span>
        <span
          className={`menu-link ${activePage === "SIGNUP" ? "active" : ""}`}
          onClick={() => handleMenuClick("Signup")}
        >
          SIGNUP
        </span>
      </div>
    </nav>
  );
}

export default Menu;
