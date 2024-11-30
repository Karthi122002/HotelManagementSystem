import React, { useState, useEffect } from "react";
import "./Offers.css";

const OffersPromotions = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const mockOffers = [
      {
        id: 1,
        title: "Black Friday Special!",
        description: "Get up to 50% off on selected items. Limited time offer!",
        validTill: "2024-11-30",
        image: require("../../Assets/black-1.jpg"), // Using local image
      },
      {
        id: 2,
        title: "Holiday Sale!",
        description: "Enjoy 30% off sitewide during our holiday season sale.",
        validTill: "2024-12-25",
        image: require("../../Assets/black-3.jpg"), // Using local image
      },
      {
        id: 3,
        title: "New Year Offer!",
        description: "Start the new year with a bang! Get $20 cashback on orders above $100.",
        validTill: "2025-01-01",
        image: require("../../Assets/black-4.jpg"), // Using local image
      },
      {
        id: 4,
        title: "Summer Flash Sale!",
        description: "Get an extra 25% off on all summer items. Limited stock!",
        validTill: "2024-08-31",
        image: require("../../Assets/block-6.jpg"), // Using local image
      },
    ];

    setOffers(mockOffers);
  }, []);

  return (
    <div className="offers-container">
      {/* <h2 className="offers-header">Offers & Promotions</h2> */}
      <div className="offers-list">
        {offers.map((offer) => (
          <div className="offer-item" key={offer.id}>
            <div className="offer-image-container">
              <img
                src={offer.image}
                alt={offer.title}
                className="offer-image"
              />
            </div>
            <div className="offer-details">
              <h3 className="offer-title">{offer.title}</h3>
              <p className="offer-description">{offer.description}</p>
              <p className="offer-validity">
                <strong>Valid Till:</strong> {offer.validTill}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersPromotions;
