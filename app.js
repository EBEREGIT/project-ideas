// external imports
const express = require("express");
const mongoose = require("mongoose");

// initializations
const app = express();

// mongoDB connect
mongoose
  .connect(
    "mongodb+srv://Ebere:qWjOLsZTlMxY0uHM@cluster0-ev2sa.mongodb.net/project-ideas?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas!");
  })
  .catch((error) => {
    console.log("Unable to connect to MongoDB Atlas!");
    console.error(error);
  });

app.use((request, response) => {
  response.json({ message: "Welcome to Project Ideas" });
});

module.exports = app;
