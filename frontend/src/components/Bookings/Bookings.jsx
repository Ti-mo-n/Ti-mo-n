// Importing necessary React components, hooks, and styles
import React, { useEffect, useState } from "react";
import Notifications from "../Notifications/Notifications";
import { FaCheck, FaTimes } from "react-icons/fa"; // Import icons from react-icons/fa
import "./Bookings.css";
// import axios from 'axios';

// Bookings component
const Bookings = () => {
  // Dummy booking data for testing and initial rendering
  const bookingDatadummy = [
    // Sample booking entries
    // Each entry contains details like id, name, email, room details, and status
    // This data will be replaced with actual fetched data later
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      roomCapacity: "Double",
      roomType: "Self Contained",
      roomNumber: "A3-01",
      status: "Pending",
    },
    // ... additional dummy entries ...
  ];

  // State to store booking data
  const [bookingData, setBookingData] = useState([]);

  // State to represent the user (authentication or state system)
  const [user] = useState(null);

  // useEffect hook to fetch booking data when the component mounts
  useEffect(() => {
    // Dynamically get the hostel from your authentication or state system
    const hostelId = user ? user.hostel : null;

    // Function to fetch data asynchronously
    const fetchData = async () => {
      try {
        // Fetching booking data from the server using the hostelId
        const result = await fetch(`http://localhost:3000/booking/${hostelId}`);
        const jsonResult = await result.json();

        // Updating the state with the fetched booking data
        setBookingData(jsonResult);
      } catch (error) {
        console.error("Error fetching booking data:", error);
      }
    };

    // Calling the fetchData function
    fetchData();

    // Dependency is user and changes only once when the component mounts
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Rendering the Bookings component
  return (
    <div className="bookings-container">
      {/* Heading for the Available Bookings section */}
      <h1>Available Bookings</h1>

      {/* Container for the table displaying booking data */}
      <div className="table-container">
        <table>
          {/* Table header */}
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Address</th>
              <th>Room Capacity</th>
              <th>Room Type</th>
              <th>Room Number</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          {/* Table body with dynamically rendered booking data */}
          <tbody>
            {bookingData.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.firstName}</td>
                <td>{booking.lastName}</td>
                <td>{booking.email}</td>
                <td>{booking.roomCapacity}</td>
                <td>{booking.roomType}</td>
                <td>{booking.roomNumber}</td>
                <td>{booking.status}</td>
                <td>
                  {/* Action buttons for approving and rejecting bookings */}
                  <div className="button-container">
                    <button className="approve-button">
                      <FaCheck /> Approve
                    </button>
                    <button className="reject-button">
                      <FaTimes /> Reject
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Container for the Notifications section */}
      <div className="notifications-container">
        <h1>Notifications</h1>
        {/* Rendering the Notifications component */}
        <Notifications />
      </div>
    </div>
  );
};

// Exporting the Bookings component as the default export
export default Bookings;
