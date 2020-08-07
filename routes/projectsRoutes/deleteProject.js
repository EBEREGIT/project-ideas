// internal imports
const Project = require("../../database/model/projects");
const projectValidation = require("../../validatioin/projectsValidation");

exports.deleteProject = (request, response) => {
  // execute validation query
  let { error } = projectValidation.singleProject.validate(request.params);

  // if there is an error during validation, terminate execution
  if (error) return response.status(403).send(error.details[0].message);

  // search if user exist
  Project.findOne({
    _id: request.params.id,
  }).then((result) => {
    // check if the logged in user is the one who uploaded the project
    if (request.user.userId !== result.uploadedBy)
      return response.status(400).send({
        Warning: "You are not authorized to delete this project",
      });
  }).catch((error) => {
    response.status(404).send({
      message: "Project Not Found",
      error,
    });
  });

  // Delete user
  Project.deleteOne({ _id: request.params.id })
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
