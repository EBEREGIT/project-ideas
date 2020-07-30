// external imports
const express = require("express");
const mongoose = require("mongoose");
const dbConnect = require("./database/dbConnect")

// initializations
const app = express();

// mongoDB connect
dbConnect();

app.use((request, response) => {
  response.json({ message: "Welcome to Project Ideas" });
});

module.exports = app;
