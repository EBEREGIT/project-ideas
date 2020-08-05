// internal imports
const Project = require("../../database/model/projects");

exports.searchProjects = (request, response) => {
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
