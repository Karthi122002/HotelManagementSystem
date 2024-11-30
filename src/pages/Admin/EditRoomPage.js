import React, { useState } from "react";
import "./EditRoomModel.css";

const EditRoomModal = ({ room, onSave, onCancel }) => {
  const [editedRoom, setEditedRoom] = useState({ ...room });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedRoom((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedRoom);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Edit Room</h2>
        <form>
          <label>
            Room Number:
            <input
              type="text"
              name="roomNumber"
              value={editedRoom.roomNumber}
              onChange={handleChange}
            />
          </label>
          <label>
            Type:
            <input
              type="text"
              name="type"
              value={editedRoom.type}
              onChange={handleChange}
            />
          </label>
          <label>
            Status:
            <select
              name="status"
              value={editedRoom.status}
              onChange={handleChange}
            >
              <option value="Available">Available</option>
              <option value="Occupied">Occupied</option>
              <option value="Under Maintenance">Under Maintenance</option>
            </select>
          </label>
          <label>
            Price:
            <input
              type="text"
              name="price"
              value={editedRoom.price}
              onChange={handleChange}
            />
          </label>
          <div className="modal-buttons">
            <button type="button" onClick={handleSave} className="save-btn">
              Save
            </button>
            <button type="button" onClick={onCancel} className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRoomModal;
