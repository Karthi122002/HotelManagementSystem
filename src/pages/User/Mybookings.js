import React, { useState, useEffect } from 'react';
import './Mybookings.css';

const Mybookings = () => {
  const [bookings, setBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;

  useEffect(() => {
    // Assuming your JSON data is stored at a URL or API endpoint
    fetch('db.json')  // Replace with actual path to JSON data
      .then(response => response.json())
      .then(data => setBookings(data.Bookings))  // Assumes your JSON has a "Bookings" key
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const pageData = bookings.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div className="container" style={{ backgroundColor: "ButtonShadow" }}>
      <div className="header">
        <h1>My Bookings</h1>
        <p>"My Booking system efficiently manages room reservations, customer details, and payment status with a user-friendly interface, ensuring a smooth experience for both users and administrators."</p>
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
                <span className={booking.payment === 'success' ? 'success' : 'pending'}>
                  {booking.payment === 'success' ? 'Success' : 'Pending'}
                </span>
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

export default Mybookings;
