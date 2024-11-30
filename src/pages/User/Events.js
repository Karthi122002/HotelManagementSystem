import React, { useState, useEffect } from 'react';
import './Events.css';

const Events = () => {
  const [bookings, setBookings] = useState([
    { no: "01", name: "Alvin", phone: "+01 4215 3521", city: "New York, USA", arrival: "12 May", departure: "20 May", members: "12", payment: "success" },
    { no: "02", name: "Liam", phone: "+01 2484 6521", city: "Bangalore, India", arrival: "18 Apr", departure: "24 Apr", members: "12", payment: "success" },
    { no: "03", name: "Logan", phone: "+01 6524 6521", city: "Los Angeles, USA", arrival: "05 Dec", departure: "12 Dec", members: "12", payment: "pending" },
    { no: "04", name: "Michael", phone: "+01 3652 1425", city: "Bristol, UK", arrival: "14 Jan", departure: "24 Jan", members: "12", payment: "pending" },
    { no: "05", name: "Alvin", phone: "+01 4215 3521", city: "New York, USA", arrival: "12 May", departure: "20 May", members: "12", payment: "success" },
    { no: "06", name: "Liam", phone: "+01 2484 6521", city: "Bangalore, India", arrival: "18 Apr", departure: "24 Apr", members: "12", payment: "success" },
    { no: "07", name: "Logan", phone: "+01 6524 6521", city: "Los Angeles, USA", arrival: "05 Dec", departure: "12 Dec", members: "12", payment: "pending" },
    { no: "08", name: "Michael", phone: "+01 3652 1425", city: "Bristol, UK", arrival: "14 Jan", departure: "24 Jan", members: "12", payment: "pending" },
    { no: "09", name: "Alvin", phone: "+01 4215 3521", city: "New York, USA", arrival: "12 May", departure: "20 May", members: "12", payment: "success" },
    { no: "10", name: "Liam", phone: "+01 2484 6521", city: "Bangalore, India", arrival: "18 Apr", departure: "24 Apr", members: "12", payment: "success" },
    { no: "11", name: "Logan", phone: "+01 6524 6521", city: "Los Angeles, USA", arrival: "05 Dec", departure: "12 Dec", members: "12", payment: "pending" },
    { no: "12", name: "Michael", phone: "+01 3652 1425", city: "Bristol, UK", arrival: "14 Jan", departure: "24 Jan", members: "12", payment: "pending" },
  ]);

  const rowsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const pageData = bookings.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div className="container" style={{ maxWidth:'100%'}}>
      <div className="header" style={{  }}>
        <h1>My Events</h1>
        <p>"The hotel is hosting an enchanting event that promises a night of elegance and celebration. Guests can enjoy live music, exquisite dining, and stunning décor in a luxurious ambiance. This event offers an unforgettable experience tailored to delight and inspire. "</p>
      </div>

      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Phone</th>
            <th>City</th>
            <th>Arrival</th>
            <th>Departure</th>
            <th>Members</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {pageData.map((booking) => (
            <tr key={booking.no}>
              <td>{booking.no}</td>
              <td>{booking.name}</td>
              <td>{booking.phone}</td>
              <td>{booking.city}</td>
              <td>{booking.arrival}</td>
              <td>{booking.departure}</td>
              <td>{booking.members}</td>
              <td>
                <span className={booking.payment === 'success' ? 'success' : 'pending'}>{booking.payment === 'success' ? 'Success' : 'Pending'}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ul className="pagination">
        <li><a href="#" onClick={() => handleChangePage(currentPage - 1)}>&lt;</a></li>
        {[...Array(Math.ceil(bookings.length / rowsPerPage)).keys()].map((page) => (
          <li key={page} className={currentPage === page + 1 ? 'active' : ''}>
            <a href="#" onClick={() => handleChangePage(page + 1)}>{page + 1}</a>
          </li>
        ))}
        <li><a href="#" onClick={() => handleChangePage(currentPage + 1)}>&gt;</a></li>
      </ul>
    </div>
  );
};

export default Events;
