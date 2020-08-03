// external imports
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// internal imports
const User = require("../../database/model/users");

exports.readUser = (request, response) => {
  User.findOne({ email: request.body.email })
    .then((user) => {
      // if email does not match any record terminate
      if (!user) {
        return response.status(404).send({
          message: new Error("User not found"),
        });
      }

      // compare password entered and already existing password
      bcrypt
        .compare(request.body.password, user.password)
        .then((passwordMatch) => {
          // if password do not match, terminate process
          if (!passwordMatch) {
            return response.status(401).send({
              message: "Incorrect Password",
            });
          }

          //   if password matches
          //   create JWT token
          const token = jwt.sign(
            { userId: user._id },
            "AKWA_OKWUKWO_TIBE_AKI_IFE_DI_ABUO_OTU_GA_EME",
            { expiresIn: "24h" }
          );

          //   return success response
          response.status(200).send({
            message: "Login Successful",
            userName: user.userName,
            email: user.email,
            token,
          });
        })
        .catch((error) => {
          response.status(401).send({
            message: "Password is incorrect",
            error,
          });
        });
    })
    .catch((e) => {
      response.status(400).send({
        message: "An error occured",
        e,
      });
    });
};
