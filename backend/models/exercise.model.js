const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Fields and validations
const exerciseSchema = new Schema(
  {
    username: { type: String, required: true},
    description: { type: String, required: true},
    duration: { type: Number, required: true},
    date: { type: Date, required: true},
  },
  {
    timestamps: true,
  }
);

// Create and export model
const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
