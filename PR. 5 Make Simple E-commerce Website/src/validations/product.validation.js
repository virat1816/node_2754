const Joi = require("joi");

// create user

const createProduct =  {
  body: Joi.object().keys({
    product_name: Joi.string().trim().required(),
    product_price: Joi.string().trim().required(),
    product_Qty: Joi.string().trim().required(),
    product_desc: Joi.string().trim().required()
  }),
};
const getProduct =  {
  query: Joi.object().keys({
    product_name: Joi.string().trim().allow(""),
    product_price: Joi.string().trim().allow(""),
    product_Qty: Joi.string().trim().allow(""),
    product_desc: Joi.string().trim().allow("")
  }),
};

module.exports = {createProduct,getProduct};