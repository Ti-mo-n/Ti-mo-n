const mongoose = require("mongoose");
const validator = require("validator");

// creating the booking schema for the booking route
const bookingSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Enter first name"],
  },
  lastName: {
    type: String,
    required: [true, "Enter last name"],
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Please enter a valid email",
    },
  },
  phoneContact: {
    type: String,
    required: [true, "Enter phone contact"],
    minlength: 10,
    maxlength: 10,
  },
  type: {
    type: String,
    required: [true,"Enter the type of room e.g (single,double,triple)"]
  },
});

module.exports = mongoose.model("booking", bookingSchema);
