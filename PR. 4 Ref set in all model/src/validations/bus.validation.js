
const Joi = require("joi");


const createbus =  {
  body: Joi.object().keys({
    bus_name: Joi.string().trim().required(),
    bus_number: Joi.number().required(),
    bus_seat_price: Joi.string().required().trim(),
    bus_company: Joi.string().trim().required(),
    bus_capacity: Joi.string().trim().required()
  }),
};
const getbus =  {
  query: Joi.object().keys({
    bus_name: Joi.string().trim().allow(""),
    bus_number: Joi.string().trim().allow(""),
    bus_seat_price: Joi.string().required().trim(),
    bus_company: Joi.string().trim().allow(""),
    bus_capacity: Joi.string().trim().allow("")
  }),
};

module.exports = {createbus,getbus};