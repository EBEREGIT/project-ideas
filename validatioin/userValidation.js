const Joi = require("joi");

const userValidation = {
  // create user validation schema
  createUser: Joi.object().keys({
    userName: Joi.string().empty().required().alphanum().min(3),
    email: Joi.string().empty().required().email({ minDomainSegments: 2 }),
    password: Joi.string()
      .empty()
      .required()
      .min(6)
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  }),
  // define all the other schemas below
};

module.exports = userValidation;
