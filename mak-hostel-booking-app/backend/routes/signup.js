const express = require("express");
const router = express.Router();
const User = require("../models/user");

//importing the create token function for jwt authentication
const { createToken } = require("../authcontorller");

// //imports the check image middleware
// const {upload} = require('../imagemiddleware')

//signing up POST
// router.post("/",upload.array('images', 5), async (req, res) => {
router.post("/", async (req, res) => {
  const user = new User({
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    // fullName: req.body.fullName,
    email: req.body.email,
    phoneContact: req.body.phoneContact,
    hostelName: req.body.hostelName,
    password: req.body.password,
  });

  try {
    // Handle the uploaded files in req.files
    // const images = req.files.map((file) => ({
    //   filename: file.filename,
    //   path: file.path,
    // }));

    // Assign the images array to the user
    // user.images = images;

    const newUser = await user.save();
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
    res.status(201).json({ newUser });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log(err.message);
  }
});

module.exports = router;
