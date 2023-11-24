const express = require("express");
const router = express.Router();
const User = require("../models/user"); //import user model

// Update user by ID
router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = req.body;

    if (!id || Object.keys(updatedUser).length === 0) {
      return res.status(400).json({ message: "Invalid input data" });
    }

    const user = await User.findByIdAndUpdate(id, updatedUser, { new: true });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

module.exports = router;
