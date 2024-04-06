const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  Plan: { type: mongoose.Schema.Types.ObjectId, ref: "Plan" },
  Log: [{ type: mongoose.Schema.Types.ObjectId, ref: "Session" }],
});

module.exports = mongoose.model("User", schema);
