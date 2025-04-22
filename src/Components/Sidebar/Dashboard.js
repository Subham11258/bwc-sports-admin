import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <h2>Dashboard</h2>
        {/* <p>Key Stats</p> */}
      </div>

      <div className="parent-container">
        <div className="key-stats-header">
        <p>Key Stats</p>
        </div>
        <div className="key-stats">
          <div className="stat">
            Total Sessions Booked
            <br />
            <b>230</b>
          </div>
          <div className="stat">
            Revenue
            <br />
            <b>$15000</b>
          </div>
          <div className="stat">
            Subscriptions
            <br />
            <b>120</b>
          </div>
          <div className="stat">
            Upcoming Sessions
            <br />
            <b>15</b>
          </div>
          <div className="stat">Other</div>
        </div>
      </div>

      <div className="actions-notifications">
        <div className="actions">
          <h4 className="section-title">Quick Actions</h4>
          <button className="action-btn">
            <span> Add a New Location</span>
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.2617 15.2175L14.6967 1.78249M14.6967 1.78249L14.9619 12.1239M14.6967 1.78249L4.3553 1.51732"
                stroke="#424242"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button className="action-btn">
            <span> Add New Parent (Manual Cash Payments)</span>
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.2617 15.2175L14.6967 1.78249M14.6967 1.78249L14.9619 12.1239M14.6967 1.78249L4.3553 1.51732"
                stroke="#424242"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button className="action-btn">
            Manage New Appointments
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.2617 15.2175L14.6967 1.78249M14.6967 1.78249L14.9619 12.1239M14.6967 1.78249L4.3553 1.51732"
                stroke="#424242"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* <div className="notifications">
    <h4 className="section-title">Notifications</h4>
    <div className="notification-item">Soccer session canceled on March 12, 4 PM</div>
    <div className="notification-item">Basketball session rescheduled for March 15, 2 PM</div>
    <div className="notification-item">Reminder: Tennis session on March 14, 3 PM</div>
  </div> */}

        <div className="notifications">
          <h4 className="section-title">Notifications</h4>
          <button className="action-btn">
            Soccer session canceled on March 12, 4 PM
            <span className="arrow"></span>
          </button>
          <button className="action-btn">
            Basketball session rescheduled for March 15, 2 PM
            <span className="arrow"></span>
          </button>
          <button className="action-btn">
            Reminder: Tennis session on March 14, 3 PM
            <span className="arrow"></span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
