//imports the db connection
const { db } = require("../db");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const express = require("express");
const router = express.Router();

// Define your Mongoose model
const Hostel = require("../models/hostel");

//to get a single hostel listing from the db
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  if (ObjectId.isValid(id)) {
    // Convert the provided id to a valid ObjectId
    const validId = new ObjectId(id);

    try {
      const hostel = await Hostel.findById(validId);
      if (!hostel) {
        res.status(404).json({ error: "Hostel not found" });
      } else {
        res.status(200).json(hostel);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Could not fetch the document" });
    }
  } else {
    res.status(400).json({ error: "Not a valid doc id" });
  }
});

//to delete a single hostel listing from the db
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  if (ObjectId.isValid(id)) {
    // Convert the provided id to a valid ObjectId
    const validId = new ObjectId(id);

    try {
      const result = await Hostel.deleteOne({ _id: validId });
      if (result.deletedCount === 1) {
        res.status(200).json({ message: "Hostel deleted successfully" });
      } else {
        res.status(404).json({ error: "Hostel not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Could not fetch the document" });
    }
  } else {
    res.status(400).json({ error: "Not a valid doc id" });
  }
});

//to update a single hostel listing from the db
router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  if (ObjectId.isValid(id)) {
    // Convert the provided id to a valid ObjectId
    const validId = new ObjectId(id);

    try {
      const result = await Hostel.updateOne(
        { _id: validId },
        { $set: updates }
      );
      if (result.modifiedCount === 1) {
        res.status(200).json({ message: "Hostel updated successfully" });
      } else {
        res.status(404).json({ error: "Hostel not found" });
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
