const mongoose = require("mongoose");

//connect db
const connectMongoDB = async function () {
  try {
    await mongoose.connect(process.env.URI);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectMongoDB;
