const Joi = require("joi");


const createUser =  {
  body: Joi.object().keys({
    user_name: Joi.string().trim().required(),
    user_email: Joi.string().trim().required(),
    user_number: Joi.string().trim().required(),
    user_gender: Joi.string().trim().required(),
    address: Joi.string().trim().required()
  })
};
const getUser =  {
  query: Joi.object().keys({
    user_name: Joi.string().trim().allow(""),
    user_email: Joi.string().trim().allow(""),
    user_number: Joi.string().trim().allow(""),
    user_gender: Joi.string().trim().allow(""),
    address: Joi.string().trim().allow("")
  }),
};

module.exports = {createUser,getUser};