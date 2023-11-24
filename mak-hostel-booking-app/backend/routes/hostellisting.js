//imports the db connection
const { db } = require("../db");

const express = require("express");
const router = express.Router();
const Hostel = require("../models/hostel");

//imports the check image middleware
const { upload } = require("../imagemiddleware");

//hostel listing  POST
router.post("/", upload.array("images", 5), async (req, res) => {
  console.log("Received POST request body:", req.body);
  const hostel = new Hostel({
    buildingName: req.body.buildingName,
    location: req.body.location,
    amenities: req.body.amenities,
    fullyBooked: req.body.fullyBooked,
    rooms: req.body.rooms,
  });

  try {
    // Handle the uploaded files in req.files
    const images = req.files.map((file) => ({
      filename: file.filename,
      path: file.path,
    }));

    // Assign the images array to the user
    user.images = images;

    const newhostel = await hostel.save();

const userId = req.params.userId; 
const hostelId = newHostel._id;

// Update the user document with the new hostel ID
const user = await users.findOneAndUpdate(
  { _id: userId },
  { $push: { hostels: hostelId } }, 
  { new: true }
);

    res.status(201).json(newhostel);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// hostel listing get request for all hostel listings
router.get("/", async (req, res) => {
  let hostels = [];
  db.collection("hostels")
    .find()
    .sort({ buildingName: 1 })
    .forEach((hostel) => hostels.push(hostel))
    .then(() => {
      res.status(200).json(hostels);
    })
    .catch(() => {
      res.status(500).json({ error: "couldnt fetch hostels" });
    });
});

module.exports = router;
