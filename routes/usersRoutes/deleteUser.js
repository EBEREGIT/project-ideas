// internal imports
const User = require("../../database/model/users");
const userValidation = require("../../validatioin/userValidation");

exports.deleteUser = (request, response) => {
  // execute validation query
  let { error } = userValidation.deleteUser.validate(request.params);

  // if there is an error during validation, terminate execution
  if (error) return response.status(403).send(error.details[0].message);

  // delete that user
  User.deleteOne({ _id: request.params.id })
    .then(() => {
      response.status(200).send({
        message: "Deleting Successful",
      });
    })
    .catch((error) => {
      response.status(400).send({
        message: "Error while Deleting",
        error,
      });
    });
};
