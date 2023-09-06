const express = require("express");
const router = express.Router();
const {travelValidation} = require("../../validations");
const {travelController} = require("../../controllers");
const validate = require("../../middlewares/validate");


/** Crate Category list */
router.post(
  "/create-travel",
  validate(travelValidation.createTravel),
  travelController.createTravel
);

router.get(
  "/List-travel",
  validate(travelValidation.getTravel),
  travelController.getTravel
);

router.delete(
  "/delete-travel/:Id",
  travelController.deleteTravel
)
module.exports = router;