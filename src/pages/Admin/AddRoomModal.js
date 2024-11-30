import React, { useState } from "react";
// import "./AddRoomModal.css"; // Custom CSS for modal

const AddRoomModal = ({ onSave, onCancel }) => {
  const [roomDetails, setRoomDetails] = useState({
    roomNumber: "",
    type: "",
    status: "Available",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields before saving
    if (!roomDetails.roomNumber || !roomDetails.type || !roomDetails.price) {
      alert("Please fill in all the required fields.");
      return;
    }

    onSave(roomDetails);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Room</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="roomNumber">Room Number</label>
            <input
              type="text"
              id="roomNumber"
              name="roomNumber"
              value={roomDetails.roomNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Room Type</label>
            <input
              type="text"
              id="type"
              name="type"
              value={roomDetails.type}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={roomDetails.status}
              onChange={handleChange}
            >
              <option value="Available">Available</option>
              <option value="Occupied">Occupied</option>
              <option value="Under Maintenance">Under Maintenance</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price (₹)</label>
            <input
              type="number"
              id="price"
              name="price"
              value={roomDetails.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="modal-actions">
            <button type="submit" className="save-btn">
              Save
            </button>
            <button
              type="button"
              className="cancel-btn"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRoomModal;
