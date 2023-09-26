const Joi = require("joi");

// create user

const createMovie = {
    body: Joi.object().keys({
        Movie_name: Joi.string().trim().required(),
        release_year: Joi.string().trim().required(),
        actors: Joi.string().trim().required(),
        directors: Joi.string().trim().required()
    }),
};
const getMovie = {
    query: Joi.object().keys({
        Movie_name: Joi.string().trim().allow(""),
        release_year: Joi.string().trim().allow(""),
        actors: Joi.string().trim().allow(""),
        directors: Joi.string().trim().allow("")
    }),
};

module.exports = {
    createMovie,
    getMovie
};