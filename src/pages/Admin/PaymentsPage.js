import React, { useState } from "react";
import "./PaymentsPage.css";

const PaymentsPage = () => {
  const [payments, setPayments] = useState([
    {
      id: 1,
      transactionId: "TXN12345",
      customerName: "John Cena",
      paymentDate: "2024-11-10",
      amount: "2200",
      status: "Success",
    },
    {
      id: 2,
      transactionId: "TXN67890",
      customerName: "Undertaker",
      paymentDate: "2024-11-12",
      amount: "2150",
      status: "Pending",
    },
    {
      id: 3,
      transactionId: "TXN54321",
      customerName: "Michael Johnson",
      paymentDate: "2024-11-15",
      amount: "3000",
      status: "Success",
    },
    {
      id: 4,
      transactionId: "TXN54426",
      customerName: "The Rock",
      paymentDate: "2024-11-16",
      amount: "2300",
      status: "Pending",
    },
    {
      id: 5,
      transactionId: "TXN67880",
      customerName: "The Great Khali",
      paymentDate: "2024-11-12",
      amount: "2150",
      status: "Pending",
    },
  ]);

  const [search, setSearch] = useState("");
  const [selectedPayment, setSelectedPayment] = useState(null);

  const filteredPayments = payments.filter(
    (payment) =>
      payment.customerName.toLowerCase().includes(search.toLowerCase()) ||
      payment.status.toLowerCase().includes(search.toLowerCase())
  );

  const handleViewDetails = (payment) => {
    setSelectedPayment(payment);
  };

  const closeModal = () => {
    setSelectedPayment(null);
  };

  return (
    <div className="payments-page">
      <h1>Payments</h1>
      <div className="toolbar">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by customer or status..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="payments-table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Transaction ID</th>
              <th>Customer Name</th>
              <th>Payment Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayments.length > 0 ? (
              filteredPayments.map((payment, index) => (
                <tr key={payment.id}>
                  <td>{index + 1}</td>
                  <td>{payment.transactionId}</td>
                  <td>{payment.customerName}</td>
                  <td>{payment.paymentDate}</td>
                  <td>₹{payment.amount}</td>
                  <td>
                    <span
                      className={`status ${payment.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {payment.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="view-btn"
                      onClick={() => handleViewDetails(payment)}
                    >
                      👁 View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="no-results">
                  No payments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Payment Details Modal */}
      {selectedPayment && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <h2>Payment Details</h2>
            <ul>
              <li>
                <strong>Transaction ID:</strong> {selectedPayment.transactionId}
              </li>
              <li>
                <strong>Customer Name:</strong> {selectedPayment.customerName}
              </li>
              <li>
                <strong>Payment Date:</strong> {selectedPayment.paymentDate}
              </li>
              <li>
                <strong>Amount:</strong> ₹{selectedPayment.amount}
              </li>
              <li>
                <strong>Status:</strong> {selectedPayment.status}
              </li>
            </ul>
            <button className="close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentsPage;
