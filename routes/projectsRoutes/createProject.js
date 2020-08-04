// internal imports
const User = require("../../database/model/users");

exports.createProject = (request, response) => {
    // const user = User.findById(request.user._id);
    response.json(request.user);
}