import React from 'react';
import './MainDash.css';
import Cards from '../Cards/Cards';
import Table from '../Table/Table';
import Notifications from '../Notifications/Notifications';
import StudentReview from '../StudentReview/StudentReview';

const MainDash = () => {
  return (
    <div>
      <div className="MainDash">
        {/* Header */}
        <h1> Custodian Dashboard</h1>

        {/* Display Cards component */}
        <Cards />

        {/* Display Table component */}
        <Table />

        <div>
          {/* Hostel Reviews Section */}
          <h3>Hostel Reviews</h3>
          {/* Display StudentReview component */}
          <StudentReview />
        </div>

        <div className="notifications-container">
          {/* Notifications Section */}
          <h1>Notifications</h1>
          {/* Display Notifications component */}
          <Notifications />
        </div>
      </div>
    </div>
  );
};

export default MainDash;
