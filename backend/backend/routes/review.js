//imports the db connection
const { db } = require("../db");

const express = require("express");
const router = express.Router();
const Hostel = require("../models/hostel");

//for posting a review
router.post("/:id", async (req, res) => {
  const hostelId = req.params.id;
  const { rating, comment } = req.body;

  try {
    // Find the hostel by ID
    const hostel = await Hostel.findById(hostelId);

    if (!hostel) {
      return res.status(404).json({ message: "Hostel not found" });
    }

    // Append the new review to the reviews array
    hostel.reviews.push({ rating, comment });

    // Save the updated hostel document
    await hostel.save();

    res.status(201).json({ message: "Review added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not add review" });
  }
});

//to get reviews from the db for a hostel
router.get("/single/:id", async (req, res) => {
  const id = req.params.id;

  if (ObjectId.isValid(id)) {
    // Convert the provided id to a valid ObjectId
    const validId = new ObjectId(id);

    try {
      const hostel = await Hostel.findById(validId);
      if (!hostel) {
        res.status(404).json({ error: "Hostel not found" });
      } else {
        res.status(200).json(hostel.reviews);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Could not fetch the document" });
    }
  } else {
    res.status(400).json({ error: "Not a valid doc id" });
  }
});

module.exports = router;
