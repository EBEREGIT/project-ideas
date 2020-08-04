const Joi = require("joi");

const projectValidation = {
  // create project validation schema
  createProject: Joi.object().keys({
    projectName: Joi.string().empty().required().min(4),
    sampleURL: Joi.string().empty().required().uri().trim(),
    instructionURL: Joi.string().empty().required().uri().trim(),
    otherDetails: Joi.string().empty().required(),
    seniority: Joi.string().empty().required().min(4),
  }),

  // edit project validation schema
  editProject: Joi.object().keys({
    id: Joi.string().empty().required().alphanum(),
  }),
};

module.exports = projectValidation;