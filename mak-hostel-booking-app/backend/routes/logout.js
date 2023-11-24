const express = require("express");
const router = express.Router();

//logout router
//deleting to created jwt
router.get("/", (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
});

module.exports = router;
