const express = require("express");
const router = express.Router();
const schoolValidation = require("../../validations/school.validation");
const Controller = require("../../controllers/school.controller");
const validate = require("../../middlewares/validate");


/** Crate Category list */
router.post(
  "/create-school",
  validate(schoolValidation.createSchool),
  Controller.createSchool
);

router.get(
  "/List-school",
  validate(schoolValidation.getSchool),
  Controller.getSchool
);

router.delete(
  "/delete-school/:Id",
  Controller.deleteSchool
)
module.exports = router;