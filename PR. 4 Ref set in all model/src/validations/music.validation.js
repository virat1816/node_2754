const Joi = require("joi");

// create user

const createMusic = {
  body: Joi.object().keys({
    music_title: Joi.string().trim().required(),
    artist: Joi.string().trim().required(),
    album: Joi.string().trim().required(),
    genre: Joi.string().trim().required()
  }),
};
const getMusic = {
  query: Joi.object().keys({
    music_title: Joi.string().trim().allow(""),
    artist: Joi.string().trim().allow(""),
    album: Joi.string().trim().allow(""),
    genre: Joi.string().trim().allow("")
  }),
};

module.exports = { createMusic, getMusic };