const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

//importing the create token function for jwt authentication
const { createToken } = require("../authcontorller");

//logging in POST
router.post("/", async (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }).then(async (user) => {
    if (user) {
      try {
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
          const token = createToken(user._id);
          res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
          });
          res.json(user);
        } else {
          
          res.json("Password is incorrect");
        }
      } catch (error) {
        res.json("An error occurred during login");
      }
    } else {
      res.json("user doesnot exist");
    }
  });
});

module.exports = router;
