const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Fields and validations
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 20,
    },
  },
  {
    timestamps: true,
  }
);

// Create and export model
const User = mongoose.model("User", userSchema);

module.exports = User;
