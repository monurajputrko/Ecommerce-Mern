const mongoose = require("mongoose");
require("dotenv").config();

const mongoUrl = process.env.CONNECTING_URL;

const connectinDB = () => {
  console.log("Database connection established");
  return mongoose.connect(mongoUrl);
};

module.exports = { connectinDB };
