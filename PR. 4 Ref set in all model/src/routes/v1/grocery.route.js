const express = require("express");
const router = express.Router();
const groceryValidation = require("../../validations/grocery.validation");
const Controller = require("../../controllers/grocery.controller");
const validate = require("../../middlewares/validate");


/** Crate Category list */
router.post(
    "/create-grocery",
    validate(groceryValidation.createGrocery),
    Controller.createGrocery
);

router.get(
    "/List-grocery",
    validate(groceryValidation.getGrocery),
    Controller.getGrocery
);

router.delete(
    "/delete-grocery/:Id",
    Controller.deleteGrocery
)
module.exports = router;