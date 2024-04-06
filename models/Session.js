const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: "ExerciseLog" }],
});

module.exports = mongoose.model("Session", schema);
