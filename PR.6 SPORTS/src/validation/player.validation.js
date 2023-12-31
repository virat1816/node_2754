const Joi = require("joi");

const createPlayer = {
    body: Joi.object().keys({
        First_name: Joi.string().required().trim(),
        Last_name: Joi.string().required().trim(),
        DOB: Joi.string().required().trim(),
        Nationality: Joi.string().required().trim(),
        Gender: Joi.string().required().trim(),
        Phone: Joi.string().required().trim(),
        sport_image: Joi.string().allow(""),
    })
};

const listPlayer = {
    query: Joi.object().keys({
        First_name: Joi.string().allow("").trim(),
        Last_name: Joi.string().allow("").trim(),
        DOB: Joi.string().allow("").trim(),
        Nationality: Joi.string().allow("").trim(),
        Gender: Joi.string().allow("").trim(),
        Phone: Joi.string().allow("").trim(),
        sport_image: Joi.string().allow("").trim(),
    })
}

module.exports = { createPlayer, listPlayer }