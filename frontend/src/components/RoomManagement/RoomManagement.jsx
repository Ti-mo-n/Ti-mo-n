import React, { useState } from 'react';
import './RoomManagement.css';
import axios from 'axios';

const RoomManagement = () => {
  // State to manage existing bookings
  const [bookings, setBookings] = useState([]);

  // State to manage a new booking
  const [newBooking, setNewBooking] = useState({
    roomNumber: '',
    roomType: '',
    price: '',
    studentDetails: { name: '', email: '', phone: '', gender: '' },
  });

  // Function to handle changes in general booking fields
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setNewBooking({ ...newBooking, [name]: value });
  };

  // Function to handle changes in student details
  const handleStudentDetailsChange = (e) => {
    const { name, value } = e.target;
    setNewBooking({
      ...newBooking,
      studentDetails: {
        ...newBooking.studentDetails,
        [name]: value,
      },
    });
  };

  // Function to save a new booking
  const saveNewBooking = () => {
    // Validation to ensure all necessary fields are filled
    if (!newBooking.roomNumber || !newBooking.roomType || !newBooking.studentDetails.name) {
      alert('Please fill in all fields.');
      return;
    }

    // Add the new booking to the list of bookings
    setBookings([...bookings, newBooking]);

    // Clear the form fields for the next booking
    setNewBooking({
      roomNumber: '',
      roomType: '',
      price: '',
      studentDetails: { name: '', email: '', phone: '', gender: '' },
    });
  };

  // Define room types with corresponding prices
  const roomTypes = {
    Single: 1800000,
    Double: 1200000,
  };

  return (
    <div className="room-management">
      <h2>Room Management</h2>

      {/* Form for entering new booking */}
      <div className="new-booking-form">
        <input
          type="text"
          name="roomNumber"
          placeholder="Room Number"
          value={newBooking.roomNumber}
          onChange={handleFieldChange}
        />
        <select
          name="roomType"
          value={newBooking.roomType}
          onChange={(e) => {
            handleFieldChange(e);
            // Set the price based on the selected room type
            const price = roomTypes[e.target.value];
            setNewBooking((prev) => ({ ...prev, price: price }));
          }}
        >
          <option value="">Select Room Type</option>
          <option value="Single">Single</option>
          <option value="Double">Double</option>
        </select>
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={newBooking.studentDetails.name}
          onChange={handleStudentDetailsChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Student Email"
          value={newBooking.studentDetails.email}
          onChange={handleStudentDetailsChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Student Phone"
          value={newBooking.studentDetails.phone}
          onChange={handleStudentDetailsChange}
        />
        <select
          name="gender"
          value={newBooking.studentDetails.gender}
          onChange={handleStudentDetailsChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <button onClick={saveNewBooking}>Save Booking</button>
      </div>

      {/* Displaying saved bookings if any */}
      {bookings.length > 0 && (
        <>
          <h3>Saved Bookings</h3>
          <table>
            <thead>
              <tr>
                <th>Room Number</th>
                <th>Room Type</th>
                <th>Student Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Price UGX</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.roomNumber}</td>
                  <td>{booking.roomType}</td>
                  <td>{booking.studentDetails.name}</td>
                  <td>{booking.studentDetails.email}</td>
                  <td>{booking.studentDetails.phone}</td>
                  <td>{booking.studentDetails.gender}</td>
                  <td>${booking.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default RoomManagement;
