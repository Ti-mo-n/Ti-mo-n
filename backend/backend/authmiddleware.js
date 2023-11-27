const jwt = require("jsonwebtoken");
const User = require("./models/user");

//authentication function
const requireAuth = (req, res, next) => {
  //jwt is name of the created jwt
  const token = req.cookies.jwt;

  //verify
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken) => {
      if (err) {
        console.error("Error in token verification:", err);
        res.status(401).json({ error: "Unauthorized" });
      } else {
        next();
      }
    });
  } else {
    res.status(401).json({ error: "Failed" });
  }
};

//check current user
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
      if (err) {
        console.error("Error in token verification:", err);
        res.locals.user = null;
        next();
      } else {
        try {
          let user = await User.findById(decodedToken.id);
          res.locals.user = user;
          next();
        } catch (error) {
          console.error("Error fetching user:", error);
          res.locals.user = null;
          next();
        }
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

module.exports = { requireAuth, checkUser };
