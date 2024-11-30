import React from "react";
import "./Home.css";
import FooterHotel from "./Footer";
import Mybookings from "./Mybookings";
import Cards from "../../component/Cards";



const Home = ({detailslist}) => {
  let hotels=detailslist;
  // const cards = [
  //   {
  //     title: "MY BOOKINGS",
  //     description:
  //       '"My Booking system efficiently manages room reservations, customer details, and payment status with a user-friendly interface, ensuring a smooth experience for both users."',
  //     count: "12",
  //     bgColor: "", // Background color for this card
  //     icon: "📖", // Replace with actual image/icon
  //   },
  //   {
  //     title: "EVENTS",
  //     description:
  //       "The Hotel Event feature streamlines the booking and management of hotel-hosted events, offering customizable options and real-time updates for a seamless experience.",
  //     count: "04",
  //     bgColor: "", // Background color for this card
  //     icon: "🎉", // Replace with actual image/icon
  //   },
  //   {
  //       title: "OFFERS & PROMOTIONS",
  //       description:
  //         '""Easily manage and track event bookings with real-time updates and customizable options, ensuring a seamless experience for organizers and participants."',
  //       count: "04",
  //       bgColor: "", // Background color for this card
  //       icon: "📖", // Replace with actual image/icon
  //     },
  //   {
  //     title: "PAYMENTS",
  //     description:
  //       "The Hotel Payment system ensures secure and efficient processing of transactions, offering multiple payment options and instant confirmation for a hassle-free experience.",
  //     count: "16",
  //     bgColor: "", // Background color for this card
  //     icon: "💳", // Replace with actual image/icon
  //   },
  // ];

  return (
    <div className="cards-container">
      {/* <img src={require("../../Assets/carousel-7.jpg")} className="home-pic" /> */}
      {detailslist?.map((room) => (
        // <div
        //   key={index}
        //   className="card"
        //   style={{ backgroundColor: card.bgColor }}
        // >
        //   <div className="card-icon">{card.icon}</div>
        //   <h2 className="card-title">{card.title}</h2>
        //   <p className="card-description">{card.description}</p>
        //   <h3 className="card-count">{card.count}</h3>
          
        // </div>
        <Cards data={room} />
        
        
      ))}
      <Mybookings/>
      <FooterHotel/>


    </div>
    
  );
};

export default Home;
