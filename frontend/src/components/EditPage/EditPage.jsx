import React, { useState } from "react";
import "./EditPage.css";
import { AiOutlineCamera } from "react-icons/ai";
import {
  FaUser,
  FaEnvelope,
  FaBuilding,
  FaPhone,
  FaLock,
} from "react-icons/fa";
import Logo from "../../imgs/man.png";
// import axios from 'axios';

const EditPage = () => {
  // State to store profile image (not currently used in your code)
  const [, setProfileImage] = useState("");
  
  // State to store user information
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    bio: "",
    hostelName: "",
    phone: "",
  });

  // State to store password information
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // Function to handle changes in user information inputs
  const handleUserInfoChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // Function to handle changes in password inputs
  const handlePasswordChange = (event) => {
    const { name, value } = event.target;
    setPasswords({ ...passwords, [name]: value });
  };

  // Function to handle update button click
  const handleUpdate = async (event) => {
    event.preventDefault();
    // Sends a request to the backend to UPDATE the account details
    // Get the user ID from your authentication or state system
    const userId = user ? user.id : null;
    try {
      const response = await fetch(`http://localhost:3000/update/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: userInfo.firstName,
          lastName: userInfo.lastName,
          email: userInfo.email,
          // bio: userInfo.bio,
          hostelName: userInfo.hostelName,
          phoneContact: userInfo.phone,
          password: passwords.newPassword,
        }),
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData.user);
        // Access user information from the response
        console.log("user:", user);
        // Have to save the user into the state
      } else {
        // Response is not successful
        console.error("Update failed:", await response.text());
      }
    } catch (error) {
      console.error("Error updating up account:", error);
    }
  };

  // State to store user data (not currently used in your code)
  const [user, setUser] = useState(null);

  return (
    <div className="edit-page">
      <h1>Edit Account Information</h1>
      {/* Profile Information Section */}
      <section className="profile-section">
        <div className="image-upload-container">
          <img
            src={Logo || "default-profile.png"}
            alt="Profile"
            className="profile-image"
          />
          <input
            type="file"
            id="imageUpload"
            hidden
            onChange={handleImageUpload}
          />
          <label htmlFor="imageUpload" className="camera-icon-label">
            <AiOutlineCamera />
          </label>
        </div>
        <form className="user-info-form">
          {/* Input fields for user information */}
          {/* ... */}
          <button type="button" onClick={handleUpdate}>
            Update Now
          </button>
        </form>
      </section>

      {/* Change Password Section */}
      <section className="password-section">
        <h2>Change Password</h2>
        <form className="password-form">
          {/* Input fields for changing password */}
          {/* ... */}
          <button type="button" onClick={handleUpdate}>
            Save
          </button>
        </form>
      </section>
    </div>
  );
};

export default EditPage;
