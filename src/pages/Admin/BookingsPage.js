import React, { useState, useEffect } from "react";
import "./BookingsPage.css";
import EditBookingModal from "./EditBookingModel";

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState("");
  const [editingBooking, setEditingBooking] = useState(null); // For modal

  // Fetch bookings data from the JSON file
  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => setBookings(data.Booking)) // Accessing the 'Booking' array from JSON
      .catch((error) => console.error("Error fetching bookings data:", error));
  }, []);

  const handleEdit = (booking) => {
    setEditingBooking(booking);
  };

  const handleSave = (updatedBooking) => {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === updatedBooking.id ? updatedBooking : booking
      )
    );
    setEditingBooking(null);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this booking?"
    );
    if (confirmDelete) {
      setBookings(bookings.filter((booking) => booking.id !== id));
      alert(`Booking with ID: ${id} deleted successfully.`);
    }
  };

  const filteredBookings = bookings.filter((booking) =>
    booking.customer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bookings-page">
      <h1>Bookings</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by customer name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="bookings-table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Customer</th>
              <th>Room Type</th>
              <th>Check-In</th>
              <th>Check-Out</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.length > 0 ? (
              filteredBookings.map((booking, index) => (
                <tr key={booking.id}>
                  <td>{index + 1}</td>
                  <td>{booking.customer}</td>
                  <td>{booking.roomType}</td>
                  <td>{booking.checkIn}</td>
                  <td>{booking.checkOut}</td>
                  <td>
                    <span
                      className={`status ${booking.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(booking)}
                    >
                      ✏️ Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(booking.id)}
                    >
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="no-results">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {editingBooking && (
        <EditBookingModal
          booking={editingBooking}
          onSave={handleSave}
          onCancel={() => setEditingBooking(null)}
        />
      )}
    </div>
  );
};

export default BookingsPage;
