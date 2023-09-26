const express = require("express");
const {
    categoryValidation
} = require("../../validations");
const {
    categoryController
} = require("../../controllers");
// const validate = require("../../middlewares/validate");

const router = express.Router();

/** create category info */
router.post(
    "/create-category",
    // validate(categoryValidation.createCategory),
    categoryController.createCategory
);

/** Get category list */
router.get(
    "/list",
    categoryController.getCategoryList
);

/** Delete category */
router.delete(
    "/delete-category/:categoryId",
    categoryController.deleteCategory
);

module.exports = router;