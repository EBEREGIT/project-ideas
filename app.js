// external imports
const express = require("express");
const bodyParser = require("body-parser");
const dbConnect = require("./database/dbConnect");

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

// app.get("/", (request, response) => {
//   response.json({ message: "Welcome to Project Ideas" });
// });

app.post("/auth/create-user", (request, response) => {
    console.log(request.body);
  // create a new instance of the user model
  const user = new User({
    _id: request.body._id,
    userName: request.body.userName,
    email: request.body.email,
    password: request.body.password,
  });

  user
    .save()
    .then((result) => {
      response.status(201).send({
        message: "User Created Successfully",
        result,
      });
    })
    .catch((error) => {
      response.status(400).send({
        message: "Creating User Unsuccessful",
        error,
      });
    });
});

module.exports = app;
