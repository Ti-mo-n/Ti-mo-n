const mongoose = require("mongoose");

//creating the room schema wic is going tobe a sub document in the hostel schema
const roomSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: [true, "Enter the price of the rooms"],
  },
  capacity: {
    type: String,
    required: [true, "Enter the room capacity (e.g single , double , triple)"],
    enum: ["single", "double", "triple"],
  },
  type: {
    type: String,
    required: [
      true,
      "Enter the room type(e.g self-contained , non self-contained)",
    ],
    enum: ["self-contained", "non self-contained"],
  },
});
//creating a hostel booking Schema for the hostel listings
const hostelSchema = new mongoose.Schema({
  buildingName: {
    type: String,
    required: [true, "Enter the hostel name"],
  },
  location: {
    type: String,
    required: [true, "Enter the hostel location"],
  },
  amenities: {
    type: Array,
    required: [true, "Input ammenities of the Hostel"],
  },
  fullyBooked: {
    type: Boolean,
    required: [true, "Enter if hostel is fully booked"],
  },
  rooms: [roomSchema],
  reviews: [
    {
      rating: Number,
      comment: String,
    },
  ],
  images: [
    {
      filename: String,
      path: String,
    },
  ],
  // status: {
  //   type: String,
  //   enum: ["activated", "non activated"],
  //   default: "activated"
  // },
  bookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Booking',
    },
  ],
});

module.exports = mongoose.model("hostel", hostelSchema);
