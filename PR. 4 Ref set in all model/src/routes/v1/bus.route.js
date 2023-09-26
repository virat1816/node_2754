
const express = require("express");
const router = express.Router();
const busValidation = require("../../validations/bus.validation");
const Controller = require("../../controllers/bus.controller");
const validate = require("../../middlewares/validate");


/** Crate bus */
router.post(
  "/create-bus",
  validate(busValidation.createbus),
  Controller.createBus
);

/**List bus */
router.get(
  "/List-bus",
  validate(busValidation.getbus),
  Controller.getBus
);

/**delete bus */
router.delete(
  "/delete-bus/:Id",
  Controller.deleteBus
)
module.exports = router;