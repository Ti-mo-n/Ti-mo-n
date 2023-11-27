import React, { useState } from 'react';
import { FaShuttleVan, FaWifi, FaDumbbell, FaCheck, FaTimes, FaWarehouse } from 'react-icons/fa';
import olympia from '../../imgs/olympia.png';
import './HostelDetails.css';

const HostelDetails = () => {
  // State to store hostel information
  const [hostelInfo, setHostelInfo] = useState({
    name: "",
    location: "",
    amenities: [],
    singleRoom: {
      price: "",
      description: "",
      images: [],
    },
    doubleRoom: {
      price: "",
      description: "",
      images: [],
    },
    hostelExteriorImages: [],
    fullyBooked: false,
  });

  // Function to handle changes in hostel information inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHostelInfo({
      ...hostelInfo,
      [name]: value,
    });
  };

  // Function to handle image uploads for different sections
  const handleImageUpload = (e, imageType) => {
    const imageFiles = Array.from(e.target.files);
    setHostelInfo({
      ...hostelInfo,
      [imageType]: {
        ...hostelInfo[imageType],
        images: imageFiles,
      },
    });
  };

  // Function to toggle the fully booked status
  const handleFullyBookedToggle = () => {
    setHostelInfo({
      ...hostelInfo,
      fullyBooked: !hostelInfo.fullyBooked,
    });
  };

  // Function to handle changes in amenities checkboxes
  const handleAmenitiesChange = (e) => {
    const { value } = e.target;
    const updatedAmenities = [...hostelInfo.amenities];

    if (updatedAmenities.includes(value)) {
      updatedAmenities.splice(updatedAmenities.indexOf(value), 1);
    } else {
      updatedAmenities.push(value);
    }

    setHostelInfo({
      ...hostelInfo,
      amenities: updatedAmenities,
    });
  };

  // State to store user data (not currently used in your code)
  const [user] = useState(null);

  // State to store hostel data (not currently used in your code)
  const [hostel, sethostel] = useState(null);

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a FormData object from the form
    const formData = new FormData(event.target);

    // Assuming user._id is available in your component state
    const userId = user ? user._id : null;

    // If user._id is available, append it to the FormData
    if (userId) {
      formData.append("userId", userId);
    }

    try {
      // Send a POST request to the server
      const response = await fetch("http://localhost:3000/hostellisting", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // If the request is successful, parse and log the hostel data
        const hostelData = await response.json();
        sethostel(hostelData.hostel);
        console.log("hostel:", hostel);
      } else {
        // If the request is not successful, log the error message
        console.error("Hostel listing failed:", await response.text());
      }
    } catch (error) {
      // Log any other errors that may occur
      console.error("Error listing hostel:", error);
    }
  };

  // Function to render a placeholder image if no image is provided
  const renderTestImage = (altText) => {
    return <img src={olympia} alt={altText} />;
  };

  return (
    <div className="hostel-details-container">
      <h1>Hostel Details</h1>
      <div className="form-container">
        <form className="hostel-details-form" onSubmit={handleSubmit}>
          {/* Form inputs for hostel details */}
          {/* ... */}

          <button type="submit">Save</button>
        </form>
      </div>

      <div className="hostel-view-section">
        <h2>Hostel View</h2>
        <div className="hostel-images">
          {/* Display uploaded images or placeholder images */}
          {/* ... */}
        </div>
      </div>
    </div>
  );
};

export default HostelDetails;
