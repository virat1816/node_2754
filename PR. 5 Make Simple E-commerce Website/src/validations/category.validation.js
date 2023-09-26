const Joi = require("joi");

// create user

const createCategory = {
  body: Joi.object().keys({
    category_name: Joi.string().trim().required(),
    category_item: Joi.string().trim().required(),
    category_desc: Joi.string().trim().required()
  }),
};
const getCategory = {
  query: Joi.object().keys({
    category_name: Joi.string().trim().allow(""),
    category_item: Joi.string().trim().allow(""),
    category_desc: Joi.string().trim().allow("")
  }),
};

module.exports = { createCategory, getCategory };