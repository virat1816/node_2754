const Joi = require("joi");

// create user

const createJewellery = {
  body: Joi.object().keys({
    jewellery_name: Joi.string().trim().required(),
    jewellery_price: Joi.string().trim().required(),
    jewellery_design: Joi.string().trim().required(),
    Jewellery_materials: Joi.string().trim().required()
  }),
};
const getJewellery = {
  query: Joi.object().keys({
    jewellery_name: Joi.string().trim().allow(""),
    jewellery_price: Joi.string().trim().allow(""),
    jewellery_design: Joi.string().trim().allow(""),
    Jewellery_materials: Joi.string().trim().allow("")
  }),
};

module.exports = { createJewellery, getJewellery };