// internal imports
const Project = require("../../database/model/projects");
const projectValidation = require("../../validatioin/projectsValidation");

exports.editProject = (request, response) => {
  // execute validation query
  let { error } = projectValidation.singleProject.validate(request.params);

  // if there is an error during validation, terminate execution
  if (error) return response.status(403).send(error.details[0].message);

  // create a new instance of the project model and pass in the data
  const project = new Project({
    _id: request.params.id,
    projectName: request.body.projectName,
    sampleURL: request.body.sampleURL,
    instructionURL: request.body.instructionURL,
    otherDetails: request.body.otherDetails,
    seniority: request.body.seniority,
  });

  // execute query
  Project.updateOne({ _id: request.params.id }, project)
    .then((result) => {
      // success
      response.status(201).send({
        message: "Project Updated Successfully",
        result,
      });
    })
    .catch((error) => {
      // failure to create user
      response.status(400).send({
        message: "Error Updating that project",
        error,
      });
    });
};
