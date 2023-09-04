const express = require("express");
const router = express.Router();
const studentValidation = require("../../validations/student.validation");
const studentController = require("../../controllers/student.controller");
const validate = require("../../middlewares/validate");



/** Crate student list */
router.post(
  "/create-student",
  validate(studentValidation.createStudent),
  studentController.createStudent
);

router.get(
  "/List-student",
  validate(studentValidation.getStudent),
  studentController.getStudent
);

router.delete(
  "/delete-student/:Id",
  studentController.deleteStudent
);

// router.put(
//   "/update-student/:Id",
//   studentController.updateStudent
// );

module.exports = router;