const express = require("express");
const router = express.Router();
const categoryValidation = require("../../validation/user.validation");
const Controller = require("../../controllers/user.controller");
const validate = require("../../middlewares/validate");


/** Crate User list */
router.post(
  "/create-user",
  validate(categoryValidation.createUser),
  Controller.createUser
);

module.exports = router;