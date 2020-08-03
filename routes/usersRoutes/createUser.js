// external imports
const bcrypt = require("bcrypt");

// internal imports
const User = require("../../database/model/users");
const userValidation = require("../../validatioin/userValidation");


exports.createUser = (request, response) => {
  // execute validation query
  let { error } = userValidation.createUser.validate(request.body)

  // if there is an error during validation, terminate execution
  if (error) return response.status(403).send(error.details[0].message);

  // hash the password recieved
  bcrypt
    .hash(request.body.password, 10)
    .then((hashedPassword) => {
      // create a new instance of the user model and pass in the data
      const user = new User({
        _id: request.body._id,
        userName: request.body.userName,
        email: request.body.email,
        password: hashedPassword,
      });

      // save the data in the db
      user
        .save()
        .then((result) => {
          // success
          response.status(201).send({
            message: "User Created Successfully",
            result,
          });
        })
        .catch((error) => {
          // failure to create user
          response.status(400).send({
            message: "There seem to be another user with those details",
            error,
          });
        });
    })
    .catch((e) => {
      // failure to hash password
      response.status(400).send({
        message: "Password was not hashed successfully",
        e,
      });
    });
};
