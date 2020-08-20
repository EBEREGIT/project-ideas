const Joi = require("joi");

const userValidation = {
  // create user validation schema
  createUser: Joi.object().keys({
    userName: Joi.string().empty().required().alphanum().min(3),
    email: Joi.string().empty().required().email({ minDomainSegments: 2 }),
    password: Joi.string().empty().required().min(6),
  }),

  // create user validation schema
  readUser: Joi.object().keys({
    email: Joi.string().empty().required().email({ minDomainSegments: 2 }),
    password: Joi.string().empty().required().min(6),
  }),

  // delete user validation schema
  deleteUser: Joi.object().keys({
    id: Joi.string().empty().required().alphanum(),
  }),
};

module.exports = userValidation;
