
const express = require("express");
const router = express.Router();
const stationeryValidation = require("../../validations/stationery.validation");
const Controller = require("../../controllers/stationery.controller");
const validate = require("../../middlewares/validate");


/** Crate hotel */
router.post(
    "/create-stationery",
    validate(stationeryValidation.createStationery),
    Controller.createStationery
);

/**List hotel */
router.get(
    "/List-stationery",
    validate(stationeryValidation.getStationery),
    Controller.getStationery
);

/**delete hotel */
router.delete(
    "/delete-stationery/:Id",
    Controller.deleteStationery
)
module.exports = router;