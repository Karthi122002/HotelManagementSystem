import React, { useState, useEffect } from "react";
import './EditCustomerModal.css';

const EditCustomerModal = ({ customer, onSave, onCancel }) => {
  const [editedCustomer, setEditedCustomer] = useState(customer);

  useEffect(() => {
    setEditedCustomer(customer); // Reset when customer data changes
  }, [customer]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedCustomer); // Pass the edited customer data to parent
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Customer</h2>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={editedCustomer.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={editedCustomer.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={editedCustomer.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Status</label>
          <select
            name="status"
            value={editedCustomer.status}
            onChange={handleInputChange}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div className="modal-actions">
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
          <button className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCustomerModal;
