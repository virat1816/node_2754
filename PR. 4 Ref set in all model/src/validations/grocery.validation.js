const Joi = require("joi");

// create user

const createGrocery = {
  body: Joi.object().keys({
    grocery_name: Joi.string().trim().required(),
    veg_or_nonveg: Joi.string().trim().required(),
    Qty: Joi.string().trim().required(),
    psc: Joi.string().trim().required(),
    weight: Joi.string().trim().required()
  }),
};
const getGrocery = {
  query: Joi.object().keys({
    grocery_name: Joi.string().trim().allow(""),
    veg_or_nonveg: Joi.string().trim().allow(""),
    Qty: Joi.string().trim().allow(""),
    psc: Joi.string().trim().allow(""),
    weight: Joi.string().trim().allow("")
  }),
};

module.exports = { createGrocery, getGrocery };