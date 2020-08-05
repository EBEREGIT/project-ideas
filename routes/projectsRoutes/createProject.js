// internal imports
const Project = require("../../database/model/projects");
const projectValidation = require("../../validatioin/projectsValidation");

exports.createProject = (request, response) => {
  // execute validation query
  let { error } = projectValidation.createProject.validate(request.body);

  // if there is an error during validation, terminate execution
  if (error) return response.status(403).send(error.details[0].message);

  // create a new instance of the project model and pass in the data
  const project = new Project({
    _id: request.body._id,
    projectName: request.body.projectName,
    sampleURL: request.body.sampleURL,
    instructionURL: request.body.instructionURL,
    otherDetails: request.body.otherDetails,
    seniority: request.body.seniority,
    uploadedBy: request.user.userId,
  });

  // save the new project
  project
    .save()
    .then((result) => {
      // success
      response.status(201).send({
        message: "Project Created Successfully",
        result,
      });
    })
    .catch((error) => {
      // failure to create user
      response.status(400).send({
        message: "Error creating that project",
        error,
      });
    });
};
