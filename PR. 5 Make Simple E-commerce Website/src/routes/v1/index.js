    const express = require("express");
const e_commerce = require("./e-commerce.route");
const category = require("./category.route");
const user = require("./user.route");
const product = require("./product.route");

const router = express.Router();;
router.use("/e-commerce", e_commerce);
router.use("/category", category);
router.use("/user", user);
router.use("/product", product);

module.exports = router;