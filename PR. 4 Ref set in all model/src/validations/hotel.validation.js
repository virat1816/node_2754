const Joi = require("joi");

/** create user */
const createHotel = {
  body: Joi.object().keys({
    hotel_name: Joi.string().required().trim(),
    hotel_address: Joi.string().required().trim(),
    room_no: Joi.string().required(),
    room_price: Joi.string().required().trim()
  }),
};
module.exports = {
    createHotel
};