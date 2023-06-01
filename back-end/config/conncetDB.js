const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = () => {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("database connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
