const express = require("express");
const router = express.Router();
const hotelValidation = require("../../validations/hotel.validation");
const hotelController = require("../../controllers/hotel.controller");
const validate = require("../../middlewares/validate");
// const { valid } = require("joi");


/** Creat Hotel  */
router.post(
    "/create-hotel",
    validate(hotelValidation.createHotel),
    hotelController.createHotel
);
/**List hotel */
router.get(
    "/List-hotel",
    validate(hotelValidation.gethotel),
    hotelController.getHotel
);

/**delete hotel */
router.delete(
    "/delete-hotel/:Id",
    hotelController.deleteHotel
)

module.exports = router