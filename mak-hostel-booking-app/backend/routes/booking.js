const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");

//booking POST for a hostel
router.post("/:id", async (req, res) => {
  const booking = new Booking({
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    email: req.body.email,
    phoneContact: req.body.phoneContact,
    type: req.body.type,
  });

  try {
    const newBooking = await booking.save();
    //adds the id to the hostel for reference
    const hostelId = req.params.id;
    const hostel = await hostels.findOneAndUpdate(
      { _id: hostelId },
      { $push: { bookings: newBooking._id } },
      { new: true }
    );
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//to get bookings from the db for a hostel
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  if (ObjectId.isValid(id)) {
    // Convert the provided id to a valid ObjectId
    const validId = new ObjectId(id);

    try {
      const hostel = await hostels.findById(validId).populate("bookings");
      if (!hostel) {
        res.status(404).json({ error: "Hostel not found" });
      } else {
        res.status(200).json(hostel.bookings);
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
