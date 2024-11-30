import React, { useState } from "react";
import "./ReportsPage.css";

const ReportsPage = () => {
  const [reports, setReports] = useState([
    {
      id: 1,
      date: "2024-11-01",
      type: "Daily",
      amount: "500",
      status: "Success",
      comments: "All bookings processed successfully.",
    },
    {
      id: 2,
      date: "2024-11-15",
      type: "Monthly",
      amount: "12,000",
      status: "Pending",
      comments: "Awaiting final confirmations.",
    },
    {
      id: 3,
      date: "2024-11-18",
      type: "Daily",
      amount: "700",
      status: "Success",
      comments: "No issues reported.",
    },
    {
      id: 4,
      date: "2024-11-15",
      type: "Monthly",
      amount: "12,000",
      status: "Pending",
      comments: "Awaiting final confirmations.",
    },
    {
      id: 5,
      date: "2024-11-18",
      type: "Daily",
      amount: "700",
      status: "Success",
      comments: "No issues reported.",
    },
  ]);

  const [filters, setFilters] = useState({ reportType: "All", status: "All" });
  const [search, setSearch] = useState("");
  const [selectedReport, setSelectedReport] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  // Filter reports based on type, status, and search query
  const filteredReports = reports.filter((report) => {
    const matchesType =
      filters.reportType === "All" || report.type === filters.reportType;
    const matchesStatus =
      filters.status === "All" || report.status === filters.status;
    const matchesSearch =
      report.comments.toLowerCase().includes(search.toLowerCase());

    return matchesType && matchesStatus && matchesSearch;
  });

  const handleViewDetails = (report) => {
    setSelectedReport(report);
    setIsEditMode(false);
  };

  const handleEditDetails = (report) => {
    setSelectedReport(report);
    setIsEditMode(true);
  };

  const handleSaveEdit = () => {
    setReports((prevReports) =>
      prevReports.map((r) =>
        r.id === selectedReport.id ? selectedReport : r
      )
    );
    setSelectedReport(null);
  };

  const closeModal = () => setSelectedReport(null);

  const exportToCSV = () => {
    const csvData = reports.map((report) =>
      [
        report.date,
        report.type,
        report.amount,
        report.status,
        report.comments,
      ].join(",")
    );
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["Date,Type,Amount,Status,Comments", ...csvData].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "reports.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="reports-page">
      <h1>Reports</h1>
      <div className="toolbar">
        <div className="filters">
          <select
            value={filters.reportType}
            onChange={(e) =>
              setFilters({ ...filters, reportType: e.target.value })
            }
          >
            <option value="All">All Types</option>
            <option value="Daily">Daily</option>
            <option value="Monthly">Monthly</option>
          </select>
          <select
            value={filters.status}
            onChange={(e) =>
              setFilters({ ...filters, status: e.target.value })
            }
          >
            <option value="All">All Statuses</option>
            <option value="Success">Success</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by comments..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="export-btn" onClick={exportToCSV}>
          Export to CSV
        </button>
      </div>
      <div className="reports-table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Comments</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.length > 0 ? (
              filteredReports.map((report, index) => (
                <tr key={report.id}>
                  <td>{index + 1}</td>
                  <td>{report.date}</td>
                  <td>{report.type}</td>
                  <td>₹{report.amount}</td>
                  <td>
                    <span
                      className={`status ${report.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {report.status}
                    </span>
                  </td>
                  <td>{report.comments}</td>
                  <td>
                    <button
                      className="view-btn"
                      onClick={() => handleViewDetails(report)}
                    >
                      👁 View
                    </button>
                    <button
                      className="edit-btn"
                      onClick={() => handleEditDetails(report)}
                    >
                      ✏️ Edit
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="no-results">
                  No reports found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedReport && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{isEditMode ? "Edit Report" : "View Report"}</h2>
            <ul>
              <li>
                <strong>Date:</strong>{" "}
                {isEditMode ? (
                  <input
                    type="date"
                    value={selectedReport.date}
                    onChange={(e) =>
                      setSelectedReport({
                        ...selectedReport,
                        date: e.target.value,
                      })
                    }
                  />
                ) : (
                  selectedReport.date
                )}
              </li>
              <li>
                <strong>Type:</strong> {selectedReport.type}
              </li>
              <li>
                <strong>Amount:</strong>{" "}
                {isEditMode ? (
                  <input
                    type="text"
                    value={selectedReport.amount}
                    onChange={(e) =>
                      setSelectedReport({
                        ...selectedReport,
                        amount: e.target.value,
                      })
                    }
                  />
                ) : (
                  `₹${selectedReport.amount}`
                )}
              </li>
              <li>
                <strong>Status:</strong> {selectedReport.status}
              </li>
              <li>
                <strong>Comments:</strong>{" "}
                {isEditMode ? (
                  <textarea
                    value={selectedReport.comments}
                    onChange={(e) =>
                      setSelectedReport({
                        ...selectedReport,
                        comments: e.target.value,
                      })
                    }
                  />
                ) : (
                  selectedReport.comments
                )}
              </li>
            </ul>
            <div className="modal-actions">
              {isEditMode && (
                <button className="save-btn" onClick={handleSaveEdit}>
                  Save
                </button>
              )}
              <button className="close-btn" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportsPage;
