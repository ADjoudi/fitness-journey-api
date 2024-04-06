const mongoose = require("mongoose");

function validateByType(value) {
  return typeof value === "string" || value instanceof mongoose.Types.ObjectId;
}

const schema = new mongoose.Schema({
  by: {
    type: mongoose.Schema.Types.Mixed,
    validate: {
      validator: validateByType,
      message: "Must be either a String or ObjectId",
    },
  },
  name: { type: mongoose.Schema.Types.String, required: true },
  type: { type: mongoose.Schema.Types.String },
  sets: [
    {
      reps: { type: mongoose.Schema.Types.Number },
    },
  ],
  duration: { type: mongoose.Schema.Types.Number },
});

module.exports = mongoose.model("ExerciseBank", schema);
