import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Key Stats</p>
      </div> 

      <div className="parent-container">
      <div className="key-stats">
        <div className="stat">Total Sessions Booked<br/><b>230</b></div>
        <div className="stat">Revenue<br/><b>$15000</b></div>
        <div className="stat">Subscriptions<br/><b>120</b></div>
        <div className="stat">Upcoming Sessions<br/><b>15</b></div>
        <div className="stat">Other</div>
      </div>
      </div>

      <div className="actions-notifications">
        <div className="actions">
          <h4>Quick Actions</h4>
          <button >Add a New Location ➔</button>
          <button >Add New Parent (Manual Cash Payments) ➔</button>
          <button >Manage New Appointments ➔</button>
        </div>

        <div className="notifications">
          <h4>Notifications</h4>
          <div>Soccer session canceled on March 12, 4 PM</div>
          <div>Basketball session rescheduled for March 15, 2 PM</div>
          <div>Reminder: Tennis session on March 14, 3 PM</div>
        </div>
      </div>
      </>
  );
};

export default Dashboard;