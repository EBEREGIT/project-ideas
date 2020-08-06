// internal imports
const Project = require("../../database/model/projects");

exports.readAllProjects = (request, response) => {
  Project.find()
    .then((result) => {
      // success
      response.status(200).send({
        message: "Projects found Successfully",
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
