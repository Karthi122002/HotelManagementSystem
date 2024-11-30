import React, { useState } from "react";
import EditCustomerModal from "./EditCustomerModal";
import AddCustomerModal from "./AddCustomerModal";
import "./CustomersPage.css";

const CustomersPage = () => {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "John Cena",
      email: "john.@example.com",
      phone: "+91 234 567 890",
      status: "Active",
    },
    {
      id: 2,
      name: "Undertaker",
      email: "taker.@example.com",
      phone: "+91 987 654 321",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael.@example.com",
      phone: "+91 456 789 012",
      status: "Active",
    },
    {
      id: 4,
      name: "The Rock",
      email: "rock.@example.com",
      phone: "+91 456 789 023",
      status: "Inactive",
    },
    {
      id: 5,
      name: "The Great Khali",
      email: "khali.@example.com",
      phone: "+91 456 789 013",
      status: "Active",
    },
  ]);

  const [search, setSearch] = useState("");
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [showAddCustomerModal, setShowAddCustomerModal] = useState(false);

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(search.toLowerCase()) ||
      customer.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleEditClick = (customer) => {
    setEditingCustomer(customer);
  };

  const handleSaveEditedCustomer = (editedCustomer) => {
    setCustomers((prevCustomers) =>
      prevCustomers.map((customer) =>
        customer.id === editedCustomer.id ? editedCustomer : customer
      )
    );
    setEditingCustomer(null); // Close modal
  };

  const handleAddNewCustomer = (newCustomer) => {
    setCustomers((prevCustomers) => [
      ...prevCustomers,
      { ...newCustomer, id: Date.now() },
    ]);
    setShowAddCustomerModal(false); // Close modal
  };

  const handleCancelEdit = () => {
    setEditingCustomer(null); // Close edit modal
  };

  const handleCancelAdd = () => {
    setShowAddCustomerModal(false); // Close add modal
  };

  return (
    <div className="customers-page">
      <h1>Customers</h1>
      <div className="toolbar">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="add-customer-btn" onClick={() => setShowAddCustomerModal(true)}>
          + Add New Customer
        </button>
      </div>

      {/* Edit Customer Modal */}
      {editingCustomer && (
        <EditCustomerModal
          customer={editingCustomer}
          onSave={handleSaveEditedCustomer}
          onCancel={handleCancelEdit}
        />
      )}

      {/* Add Customer Modal */}
      {showAddCustomerModal && (
        <AddCustomerModal
          onSave={handleAddNewCustomer}
          onCancel={handleCancelAdd}
        />
      )}

      <div className="customers-table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.length > 0 ? (
              filteredCustomers.map((customer, index) => (
                <tr key={customer.id}>
                  <td>{index + 1}</td>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.status}</td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => handleEditClick(customer)}
                    >
                      ✏️ Edit
                    </button>
                    <button className="delete-btn">🗑️ Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-results">
                  No customers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomersPage;
