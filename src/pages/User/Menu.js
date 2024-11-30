import React, { useState } from "react";
import "./Menu.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Menu({ onMenuClick, onButtonClick, activePage }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function

  // Toggle the menu open and close state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle menu item click
  const handleMenuClick = (page) => {
    if (page === "LOGOUT") {
      navigate("/"); // Redirect to the home page on logout
    } else {
      onMenuClick(page); // Update active page for other menu items
    }
    toggleMenu(); // Close the menu after a selection
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
          className={`menu-link ${activePage === "MY BOOKINGS" ? "active" : ""}`}
          onClick={() => handleMenuClick("MY BOOKINGS")}
        >
          MY BOOKINGS
        </span>
        <span
          className={`menu-link ${activePage === "NEW BOOKING" ? "active" : ""}`}
          onClick={() => handleMenuClick("NEW BOOKING")}
        >
          NEW BOOKING
        </span>
        <span
          className={`menu-link ${activePage === "OFFERS & PROMOTIONS" ? "active" : ""}`}
          onClick={() => handleMenuClick("OFFERS & PROMOTIONS")}
        >
          OFFERS & PROMOTIONS
        </span>
        <span
          className={`menu-link ${activePage === "PAYMENTS" ? "active" : ""}`}
          onClick={() => handleMenuClick("PAYMENTS")}
        >
          PAYMENTS
        </span>
        <span
          className={`menu-link ${activePage === "LOGOUT" ? "active" : ""}`}
          onClick={() => handleMenuClick("LOGOUT")}
        >
          LOGOUT
        </span>
      </div>
    </nav>
  );
}

export default Menu;
