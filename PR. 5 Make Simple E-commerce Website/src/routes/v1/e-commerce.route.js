const express = require("express");
const router = express.Router();
const Controller = require("../../controllers/e-commerce.controller");

/**List user */
router.get(
  "/List-e-commerce",
  Controller.getRecord
);
module.exports = router;
