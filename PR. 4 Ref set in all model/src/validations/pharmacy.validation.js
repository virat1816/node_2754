const Joi = require("joi");

// create user

const createPharmacy = {
  body: Joi.object().keys({
    Medication: Joi.string().trim().required(),
    Prescription: Joi.string().trim().required(),
    Patient: Joi.string().trim().required()
  }),
};
const getPharmacy = {
  query: Joi.object().keys({
    Medication: Joi.string().trim().allow(""),
    Prescription: Joi.string().trim().allow(""),
    Patient: Joi.string().trim().allow("")
  }),
};

module.exports = { createPharmacy, getPharmacy };