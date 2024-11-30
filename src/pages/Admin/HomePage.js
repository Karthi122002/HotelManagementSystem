import React from "react";
import "./HomePage.css";

const HomePage = () => {
  const stats = [
    {
      icon: "👤",
      title: "Today Booking",
      value: "294",
      bgColor: "#007bff", // Blue
    },
    {
      icon: "💲",
      title: "Total Amount",
      value: "$1,432",
      bgColor: "#17a2b8", // Light Blue
    },
    {
      icon: "📈",
      title: "Total Revenue",
      value: "22,534",
      bgColor: "#28a745", // Green
    },
    {
      icon: "👥",
      title: "Total Customers",
      value: "2.3k",
      bgColor: "#6f42c1", // Purple
    },
  ];

  return (
    <div className="stat-grid-home-page">
      <div className="stat-grid-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-grid-item">
            {/* Icon Container */}
            <div
              className="stat-grid-icon"
              style={{ backgroundColor: stat.bgColor }}
            >
              {stat.icon}
            </div>

            {/* Stat Info */}
            <div className="stat-grid-info">
              <p className="stat-grid-title">{stat.title}</p>
              <h2 className="stat-grid-value">{stat.value}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
