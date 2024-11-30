import React, { useState } from "react";
import "./RoomsPage.css";
import AddRoomModal from "./AddRoomModal"; // Import the AddRoomModal
import EditRoomModal from "./EditRoomPage"; // Import the EditRoomModal

const RoomsPage = () => {
  const [rooms, setRooms] = useState([
    { id: 1, roomNumber: "101", type: "Deluxe Suite", status: "Available", price: "₹5000" },
    { id: 2, roomNumber: "102", type: "Standard Room", status: "Occupied", price: "₹2500" },
    { id: 3, roomNumber: "201", type: "Presidential Suite", status: "Available", price: "₹3000" },
    { id: 4, roomNumber: "202", type: "Family Room", status: "Under Maintenance", price: "₹2500" },
    { id: 5, roomNumber: "204", type: "Honeymoon Suite", status: "Available", price: "₹5000" },
  ]);

  const [search, setSearch] = useState("");
  const [editingRoom, setEditingRoom] = useState(null);
  const [showAddRoomModal, setShowAddRoomModal] = useState(false);

  const handleAddNewRoom = (newRoom) => {
    const newRoomWithId = {
      ...newRoom,
      id: rooms.length + 1, // Simple ID generation
    };
    setRooms((prev) => [...prev, newRoomWithId]);
    setShowAddRoomModal(false); // Close modal
  };

  const handleSave = (updatedRoom) => {
    setRooms((prev) =>
      prev.map((room) => (room.id === updatedRoom.id ? updatedRoom : room))
    );
    setEditingRoom(null);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this room?"
    );
    if (confirmDelete) {
      setRooms(rooms.filter((room) => room.id !== id));
      alert(`Room with ID: ${id} deleted successfully.`);
    }
  };

  return (
    <div className="rooms-page">
      <h1>Rooms</h1>
      <div className="toolbar">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by type or status..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button
          className="add-room-btn"
          onClick={() => setShowAddRoomModal(true)}
        >
          + Add New Room
        </button>
      </div>
      <div className="rooms-table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Room Number</th>
              <th>Type</th>
              <th>Status</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rooms
              .filter(
                (room) =>
                  room.type.toLowerCase().includes(search.toLowerCase()) ||
                  room.status.toLowerCase().includes(search.toLowerCase())
              )
              .map((room, index) => (
                <tr key={room.id}>
                  <td>{index + 1}</td>
                  <td>{room.roomNumber}</td>
                  <td>{room.type}</td>
                  <td>
                    <span
                      className={`status ${room.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {room.status}
                    </span>
                  </td>
                  <td>{room.price}</td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => setEditingRoom(room)}
                    >
                      ✏️ Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(room.id)}
                    >
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Add Room Modal */}
      {showAddRoomModal && (
        <AddRoomModal
          onSave={handleAddNewRoom}
          onCancel={() => setShowAddRoomModal(false)}
        />
      )}

      {/* Edit Room Modal */}
      {editingRoom && (
        <EditRoomModal
          room={editingRoom}
          onSave={handleSave}
          onCancel={() => setEditingRoom(null)}
        />
      )}
    </div>
  );
};

export default RoomsPage;
