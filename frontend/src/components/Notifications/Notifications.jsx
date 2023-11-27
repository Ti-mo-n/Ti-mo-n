import React, { useState } from 'react';
import './Notifications.css';
import { NotificationsData } from '../../Data/Data';
import { FaTrash } from 'react-icons/fa'; // Import the FaTrash icon from react-icons/fa

const Notifications = () => {
  // State to manage notifications
  const [notifications, setNotifications] = useState(NotificationsData);

  // Function to clear a specific notification
  const clearNotification = (index) => {
    setNotifications(notifications.filter((_, i) => i !== index));
  };

  // Function to clear all notifications
  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="Notifications">
      {/* Button to clear all notifications */}
      <button className="clear-all" onClick={clearAllNotifications}>
        Clear All
      </button>

      {/* Mapping through notifications and displaying each one */}
      {notifications.map((update, index) => (
        <div className="update" key={index}>
          {update.img}
          <div className="noti">
            {/* Displaying notification content */}
            <div style={{ marginBottom: '0.5rem' }}>
              <span className="name">{update.name}</span> &nbsp;
              <span>{update.noti}</span>
            </div>
            <div>
              {/* Displaying notification time */}
              <span>{update.time}</span>
              {/* Button to clear a specific notification */}
              <button className="clear-one" onClick={() => clearNotification(index)}>
                <FaTrash /> {/* Use the FaTrash icon for the trash */}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
