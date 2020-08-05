// internal imports
const Project = require("../../database/model/projects");
const projectValidation = require("../../validatioin/projectsValidation");

exports.readProject = (request, response) => {
  // execute validation query
  let { error } = projectValidation.singleProject.validate(request.params);

  // if there is an error during validation, terminate execution
  if (error) return response.status(403).send(error.details[0].message);

  Project.findOne({
    _id: request.params.id,
  })
    .then((result) => {
      // success
      response.status(200).send({
        message: "Project found Successfully",
        result,
      });
    })
    .catch((error) => {
      // failure to create user
      response.status(404).send({
        message: "Project Not found",
        error,
      });
    });
};
