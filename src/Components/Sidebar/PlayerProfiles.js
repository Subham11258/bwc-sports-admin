import React from "react";
import "./PlayerProfiles.css";

const parents = Array(7).fill({
  name: "John Smith",
  email: "john.smith198@gmail.com",
  phone: "+1 111 111 111",
  type: "Self Pay",
  location: "New York",
});

const PlayerProfiles = () => {
  return (
    <div className="parent-container">
      <div className="parent-header">
        <span className="breadcrumb">User Management &gt; <b>Player Profiles</b></span>
        <button className="add-btn">Add New Parent</button>
      </div>

      <div className="filter-bar">
      <div className="search-container">
            <input className="search" type="text" />
            <svg
              className="search-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="#808080"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 21L16.65 16.65"
                stroke="#808080"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        <button>Date Range</button>
        <button>Age</button>
        <button>Player Tags</button>
        <button>Subscription</button>
        <button>Sports</button>
      </div>

      <div className="table-wrapper">
        <div className="table-header">
          <div>Name</div>
          <div>Email</div>
          <div>Phone</div>
          <div>Type</div>
          <div>Location</div>
          <div></div>
        </div>
        {parents.map((parent, index) => (
          <div className="table-row" key={index}>
            <div><b>{parent.name}</b></div>
            <div>{parent.email}</div>
            <div>{parent.phone}</div>
            <div>{parent.type}</div>
            <div>{parent.location}</div>
            <div><button className="view-btn">View</button></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerProfiles;
