const jwt = require("jsonwebtoken");

//i day in secs
const maxAge = 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: maxAge });
};

module.exports = {
  createToken: createToken, // Export the jwt function to create jwt in login and signup routes
};
