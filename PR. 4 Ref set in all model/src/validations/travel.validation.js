const Joi = require("joi");

// create user

const createTravel = {
  body: Joi.object().keys({
    Destination: Joi.string().trim().required(),
    start_date: Joi.string().trim().required(),
    end_date: Joi.string().trim().required()
  }),
};
const getTravel = {
  query: Joi.object().keys({
    Destination: Joi.string().trim().allow(""),
    start_date: Joi.string().trim().allow(""),
    end_date: Joi.string().trim().allow("")
  }),
};

module.exports = { createTravel, getTravel };