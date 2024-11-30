import React from 'react';
import './Newbookings.css'; // Assuming you have a CSS file for styling

const roomsData = [
    {
        title: "Junior Suite",
        description: "Comprising a bedroom and a separate living area, the Junior Suites exude a luxe residential vibe, masterfully weaving in pockets of work and relaxation spaces.",
        price: "₹3000/Night",
        imgSrc: require("../../Assets/room-1.jpg"), // Adjust path as needed
      },
      {
        title: "Family Garden Retreat",
        description: "Located on all floors from 3rd to 11th floors measuring 375 sqft, with street view, 1 King bed with spring mattress and feather duvet and pillows.",
        price: "₹2000/Night",
        imgSrc: require("../../Assets/room-2.jpg"), // Adjust path as needed
      },
  {
    title: "Super Deluxe",
    description: "Providing a garden, Manor Inn Suites Super Deluxe Room features accommodations in Noida. This property offers access to a terrace and free private parking.",
    price: "₹3000/Night",
    imgSrc: require("../../Assets/room-3.jpg"), // Adjust path as needed
  },
  
  {
    title: "Honeymoon Suite",
    description: "a hotel room or suite that has special amenities for newlyweds and couples, such as a hot tub, complimentary drinks, and beautiful views in the royal hotel",
    price: "₹5000/Night",
    imgSrc: require("../../Assets/room-6.jpg"), // Adjust path as needed
  },
  {
    title: "Economy Double",
    description: "An economy double room is a hotel room that's smaller than other rooms and can accommodate two people.",
    price: "₹3000/Night",
    imgSrc: require("../../Assets/room-5.jpg"), // Adjust path as needed
  },
  {
    title: "King",
    description: "A king room in a hotel is a room that has a king-sized bed, which is typically 76 inches wide by 80 inches long.",
    price: "₹4000/Night",
    imgSrc: require("../../Assets/room-4.jpg"), // Adjust path as needed
  },

  {
    title: "Family Garden Retreat",
    description: "Audiovisual works, such as TV shows, movies, and online videos Sound recordings and musical compositions",
    price: "$249/night",
    imgSrc: require("../../Assets/room-7.jpg"), // Adjust path as needed
  },
  {
    title: "Economy Double",
    description: " The Economy Double Spacious and inviting, perfect for creating cherished memories with loved ones.",
    price: "$249/night",
    imgSrc: require("../../Assets/room-3.jpg"), // Adjust path as needed
  },
];

const Rooms = () => {
  return (
    <div className="rooms-section">
      {/* <h3 className="section-heading"></h3>
      <h1 className="section-title">
      New Bookings <span className="highlighted-title"></span>
      </h1> */}
      <div className="rooms-grid">
        {roomsData.map((room, index) => (
          <div key={index} className="room-card">
            <img src={room.imgSrc} alt={room.title} className="room-image" />
            <h3>{room.title}</h3>
            <p>{room.description}</p>
            <p className="room-price">Starting from <strong>{room.price}</strong></p>
            <button className="book-now-button">Book Now</button>
          </div>
        ))}
      </div>
      {/* <img src={require("../")} className="home-pic" alt="Home Pic" /> */}
    </div>
  );
};

export default Rooms;
