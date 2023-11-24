const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

// creating the login schema for the signup route
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter your first name"],
    maxlength: 8,
  },
  lastName: {
    type: String,
    required: [true, "Please enter your last name"],
    maxlength: 16,
  },

  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
    validate: {
      validator: validator.isEmail,
      message: "Please enter a valid email",
    },
  },
  phoneContact: {
    type: String,
    required: [true, "Please enter a phone contact"],
  },
  hostelName: {
    type: String,
    required: [true, "Enter the hostel name"],
  },
  password: {
    type: String,
    required: [true, "Enter a password"],
  },
  hostel: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "hostel",
    },
  ],
});
//mongoose middleware fired be4 saving a user to hash there password
userSchema.pre("save", async function (next) {
  // hashing password
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("user", userSchema);
