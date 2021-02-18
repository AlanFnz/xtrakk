const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const exercisesRouter = require('./routes/exercises');
const usersRouter = require ('./routes/users');

require("dotenv").config();

// Initialize express
const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Connect to database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;

// Once connection is open, log success message
connection.once("open", () => {
  console.log("MongoDB database connection established succesfully");
});

// Routes
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

// Start listening
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
