import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import "./ReservationChart.css";

const ReservationsChart = () => {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  const [dates, setDates] = useState([
    "Jan 01", "Jan 02", "Jan 03", "Jan 04", "Jan 05", 
    "Jan 06", "Jan 07", "Jan 08", "Jan 09", "Jan 10", 
    "Jan 11", "Jan 12",
  ]);

  const [confirmedData, setConfirmedData] = useState([
    500, 450, 400, 600, 300, 500, 400, 350, 700, 300, 250, 200,
  ]);

  const [pendingData, setPendingData] = useState([
    30, 20, 25, 35, 15, 20, 30, 25, 40, 20, 18, 12,
  ]);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      const newChartInstance = new Chart(ctx, {
        type: "bar",
        data: {
          labels: dates,
          datasets: [
            {
              label: "Booking Confirmed",
              data: confirmedData,
              backgroundColor: "rgba(75, 46, 131, 0.7)",
              borderColor: "rgba(75, 46, 131, 1)",
              borderWidth: 1,
              yAxisID: "y",
            },
            {
              label: "Booking Pending",
              data: pendingData,
              type: "line",
              fill: false,
              borderColor: "#ff8c00",
              backgroundColor: "#ff8c00",
              tension: 0.1,
              yAxisID: "y1",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Booking Confirmed",
              },
            },
            y1: {
              beginAtZero: true,
              position: "right",
              grid: {
                drawOnChartArea: false,
              },
              title: {
                display: true,
                text: "Booking Pending",
              },
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: (context) =>
                  context.dataset.label === "Booking Pending"
                    ? `Pending: ${context.raw}`
                    : `Confirmed: ${context.raw}`,
              },
            },
          },
        },
      });

      setChartInstance(newChartInstance);
    }
  }, [dates, confirmedData, pendingData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const bookingConfirmed = parseInt(event.target.bookingConfirmed.value || "0", 10);
    const bookingPending = parseInt(event.target.bookingPending.value || "0", 10);

    if (isNaN(bookingConfirmed) || isNaN(bookingPending) || bookingConfirmed < 0 || bookingPending < 0) {
      alert("Please enter valid positive numbers.");
      return;
    }

    setDates((prev) => [...prev, `Day ${prev.length + 1}`]);
    setConfirmedData((prev) => [...prev, bookingConfirmed]);
    setPendingData((prev) => [...prev, bookingPending]);

    event.target.reset();
    if (chartInstance) chartInstance.update();
  };

  return (
    <div className="reservations-chart-container">
      <h5 className="chart-title">Reservations Overview</h5>
      <div className="chart-canvas-container">
        <canvas ref={chartRef}></canvas>
      </div>
      <form className="data-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Booking Confirmed:
            <input type="number" name="bookingConfirmed" placeholder="Enter Confirmed" />
          </label>
          <label>
            Booking Pending:
            <input type="number" name="bookingPending" placeholder="Enter Pending" />
          </label>
          <button type="submit" className="add-data-btn">Add Data</button>
        </div>
      </form>
    </div>
  );
};

export default ReservationsChart;
