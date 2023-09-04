const Joi = require("joi");

// create user

const createStudent =  {
  body: Joi.object().keys({
    student_name: Joi.string().trim().required(),
    student_email: Joi.string().trim().required(),
    student_number: Joi.string().trim().required(),
    student_course: Joi.string().trim().required()
  }),
};
const getStudent =  {
  query: Joi.object().keys({
    student_name: Joi.string().trim().allow(""),
    student_email: Joi.string().trim().allow(""),
    student_number: Joi.string().trim().allow(""),
    student_course: Joi.string().trim().allow("")
  }),
};

module.exports = {createStudent,getStudent};