import React, { useState } from "react";
const EditBookingModal = ({ booking, onSave, onCancel }) => {
  const [updatedBooking, setUpdatedBooking] = useState({ ...booking });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBooking((prev) => ({
      ...prev,
      [name]: value,
    }));
  };                                    

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(updatedBooking);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Booking</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Customer Name:
            <input
              type="text"
              name="customer"
              value={updatedBooking.customer}
              onChange={handleChange}
            />
          </label>
          <label>
            Room Type:
            <input
              type="text"
              name="roomType"
              value={updatedBooking.roomType}
              onChange={handleChange}
            />
          </label>
          <label>
            Check-In:
            <input
              type="date"
              name="checkIn"
              value={updatedBooking.checkIn}
              onChange={handleChange}
            />
          </label>
          <label>
            Check-Out:
            <input
              type="date"
              name="checkOut"
              value={updatedBooking.checkOut}
              onChange={handleChange}
            />
          </label>
          <label>
            Status:
            <select
              name="status"
              value={updatedBooking.status}
              onChange={handleChange}
            >
              <option value="Confirmed">Confirmed</option>
              <option value="Pending">Pending</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </label>
          <div className="modal-actions">
            <button type="submit">Save</button>
            <button type="button" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBookingModal;
