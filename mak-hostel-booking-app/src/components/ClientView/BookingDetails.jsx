// Importing useState hook from React
import { useState } from 'react';

// Importing styles for the BookingDetails component
import './BookingDetails.css';

// BookingDetails component
const BookingDetails = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    roomType: 'Single Room', // You can set a default room type
    checkInDate: '',
  });

  // Function to handle changes in the form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Updating the form data state based on user input
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send the form data to the custodian for confirmation here
    console.log(formData);
    // You can also add logic to make an API request to submit the data to a server
  };

  // Rendering the BookingDetails component
  return (
    <div className="booking-details">
      {/* Heading for the Booking Details section */}
      <h2>Booking Details</h2>

      {/* Form for capturing booking details */}
      <form onSubmit={handleSubmit}>
        {/* Form field for the name */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Form field for the phone number */}
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        {/* Form field for the email */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Form field for selecting room type */}
        <div className="form-group">
          <label htmlFor="roomType">Room Type:</label>
          <select
            id="roomType"
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
          >
            <option value="Single Room">Single Room</option>
            <option value="Double Room">Double Room</option>
            {/* Add more room types as needed */}
          </select>
        </div>

        {/* Form field for selecting check-in date */}
        <div className="form-group">
          <label htmlFor="checkInDate">Check-In Date:</label>
          <input
            type="date"
            id="checkInDate"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit button for confirming the booking */}
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
};

// Exporting the BookingDetails component as the default export
export default BookingDetails;
