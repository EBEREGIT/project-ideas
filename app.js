// external imports
const express = require("express");
const bodyParser = require("body-parser");
const dbConnect = require("./database/dbConnect");
const usersRoutes = require("./routes/usersRoutes")

// local imports
const User = require("./database/model/users");

// initializations
const app = express();

// body parser
app.use(bodyParser.json({ limit: "200mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "200mb",
    extended: true,
    parameterLimit: 1000000,
  })
);

// mongoDB connect
dbConnect();

// handle CORS error
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.get("/", (request, response) => {
  response.json({ message: "Welcome to Project Ideas" });
});

// auth routes
app.use('/auth', usersRoutes);

module.exports = app;
