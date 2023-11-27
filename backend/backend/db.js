require("dotenv").config();
const mongoose = require("mongoose");
const uri= "mongodb+srv://timonnuwagaba:OcSNV0DdnkMedyrn@cluster0.4hpvnes.mongodb.net/"

//connects to the db
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

module.exports = {
  db: db, // Export the db object for use in other modules
};
