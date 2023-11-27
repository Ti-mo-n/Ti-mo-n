const express = require("express");
const router = express.Router();
const User = require("../models/user"); // Import your User model

// Define a route to view a user by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the user by their ID
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return the user data as JSON response, including firstName, lastName, email, phoneContact, and hostelName
    const userData = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneContact: user.phoneContact,
      hostelName: user.hostelName,
    };

    res.json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
