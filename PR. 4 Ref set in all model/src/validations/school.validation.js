const Joi = require("joi");

// create user

const createSchool = {
  body: Joi.object().keys({
    school_name: Joi.string().trim().required(),
    school_address: Joi.string().trim().required(),
    school_principle: Joi.string().trim().required(),
    school_time: Joi.string().trim().required()
  }),
};
const getSchool = {
  query: Joi.object().keys({
    school_name: Joi.string().trim().allow(""),
    school_address: Joi.string().trim().allow(""),
    school_principle: Joi.string().trim().allow(""),
    school_time: Joi.string().trim().allow("")
  }),
};

module.exports = { createSchool, getSchool };