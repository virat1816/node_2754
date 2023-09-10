const express = require("express");
const router = express.Router();
const productValidation = require("../../validation/product.validation");
const Controller = require("../../controllers/product.controller");
const validate = require("../../middlewares/validate");


/** Crate product.validation list */
router.post(
  "/create-user",
  validate(productValidation.createProduct),
  Controller.createProduct
);

module.exports = router;