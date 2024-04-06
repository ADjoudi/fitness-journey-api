const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: mongoose.Schema.Types.String, required: true },
  type: { type: mongoose.Schema.Types.String },
  sets: [
    {
      setNumber: { type: mongoose.Schema.Types.Number },
      reps: { type: mongoose.Schema.Types.Number },
      weight: { type: mongoose.Schema.Types.Number },
    },
  ],
  duration: { type: mongoose.Schema.Types.Number },
  date: { type: mongoose.Schema.Types.Date },
});

module.exports = mongoose.model("ExerciseLog", schema);
