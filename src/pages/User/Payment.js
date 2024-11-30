import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import './Payment.css';

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 5;

  useEffect(() => {
    // Fetch data from the payments.json file
    fetch('db.json')  // Assuming the file is located in the public folder
      .then((response) => response.json())  // Parse the JSON response
      .then((data) => setPayments(data.payments))   // Access the 'payments' key
      .catch((error) => console.error('Error fetching payment data:', error));
  }, []);

  const filteredPayments = payments.filter(
    (payment) =>
      payment.date.includes(searchQuery) ||
      payment.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.method.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const offset = currentPage * itemsPerPage;
  const currentPayments = filteredPayments.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filteredPayments.length / itemsPerPage);

  const handlePageChange = ({ selected }) => setCurrentPage(selected);

  return (
    <div className="payment-container">
      <div className="payment-header-container">
        <h2 className="payment-header">Payment History</h2>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by date, status, or method"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <table className="payment-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Payment Method</th>
          </tr>
        </thead>
        <tbody>
          {currentPayments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.date}</td>
              <td>${payment.amount}</td>
              <td>{payment.status}</td>
              <td>{payment.method}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination-container">
        <ReactPaginate
          previousLabel={'← Previous'}
          nextLabel={'Next →'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
          pageLinkClassName={'page-link'}
          previousLinkClassName={'prev-link'}
          nextLinkClassName={'next-link'}
          disabledClassName={'disabled'}
        />
      </div>
    </div>
  );
};

export default PaymentHistory;
