const express = require("express");
const router = express.Router();
const { userValidation } = require("../../validation");
const userController = require("../../controllers/user.controller");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth")

// Create user

router.post(
    "/create-user",
    auth(),
    validate(userValidation.createUser),
    userController.createUser
);

// List user
router.get(
    "/list-user",
    validate(userValidation.listUser),
    userController.listUser
);

// Delete user
router.delete(
    "/delete-user/:Id",
    userController.deleteUser
);

// Update user
router.put(
    "/update-user/:id",
    userController.updateUser
);

module.exports = router;