const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  sessions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Session" }],
});

module.exports = mongoose.model("Plan", schema);
