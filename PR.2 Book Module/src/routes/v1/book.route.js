const express = require("express");
const router = express.Router();
const bookValidation = require("../../validations/book.validation");
const bookController = require("../../controllers/book.controller");
const validate = require("../../middlewares/validate");
// const { valid } = require("joi");


/** Creat Book list */

router.post(
    "/create-book",
    validate(bookValidation.createBook),
    bookController.createBook
)

module.exports = router