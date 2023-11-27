const multer = require("multer");
const path = require("path");

// Set up multer storage and filter
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Specify the directory where you want to store uploads
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Create a unique filename
  },
});

const fileFilter = (req, file, cb) => {
  // Check if the file is an image
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("File type not supported"), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = { upload };
