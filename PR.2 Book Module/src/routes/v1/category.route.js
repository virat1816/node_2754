const express = require("express");
const router = express.Router();
const categoryValidation = require("../../validations/category.validation");
const Controller = require("../../controllers/category.controller");
const validate = require("../../middlewares/validate");


/** Crate Category list */
router.post(
    "/create-category",
    validate(categoryValidation.createCategory),
    Controller.createCategory
  );

  module.exports = router;