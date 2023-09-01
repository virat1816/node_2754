const express = require("express");
const router = express.Router();
const jewelleryValidation = require("../../validations/jewellery.validation");
const Controller = require("../../controllers/jewellery.controller");
const validate = require("../../middlewares/validate");


/** Crate Category list */
router.post(
    "/create-jewellery",
    validate(jewelleryValidation.createJewellery),
    Controller.createJewellwey
);

router.get(
    "/List-jewellery",
    validate(jewelleryValidation.getJewellery),
    Controller.getJewellwey
);

router.delete(
    "/delete-jewellery/:Id",
    Controller.deleteJewellery
)
module.exports = router;