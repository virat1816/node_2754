const express = require("express");
const router = express.Router();
const travelValidation = require("../../validations/travel.validation");
const Controller = require("../../controllers/travel.controller");
const validate = require("../../middlewares/validate");


/** Crate Category list */
router.post(
  "/create-travel",
  validate(travelValidation.createTravel),
  Controller.createTravel
);

router.get(
  "/List-travel",
  validate(travelValidation.getTravel),
  Controller.getTravel
);

router.delete(
  "/delete-travel/:Id",
  Controller.deleteTravel
)
module.exports = router;