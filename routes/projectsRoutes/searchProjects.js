// internal imports
const Project = require("../../database/model/projects");
const projectValidation = require("../../validatioin/projectsValidation");

exports.searchProjects = (request, response) => {
  // execute validation query
  let { error } = projectValidation.searchProject.validate(request.body);

  // if there is an error during validation, terminate execution
  if (error) return response.status(403).send(error.details[0].message);

  // get search string
  const search = request.body.search;

  //   search the project name
  Project.find({ projectName: { $regex: new RegExp(search, "i") } })
    .then((projectNameResult) => {
      // search the other details
      Project.find({ otherDetails: { $regex: new RegExp(search, "i") } }).then(
        (otherDetailsResult) => {
          // return search result
          response.status(200).send({
            message: "Success",
            projectNameResult,
            otherDetailsResult,
          });
        }
      );
    })
    .catch((error) => {
      response.status(404).send({
        message: "Failure",
        error,
      });
    });
};
