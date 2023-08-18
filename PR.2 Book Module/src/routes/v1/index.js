const express = require("express");
const tokenRoutes = require("./token.route");
const userRoute = require("./user.route");
const userCategory = require("./category.route");
const userBook = require("./book.route");

const router = express.Router();

router.use("/token", tokenRoutes);
router.use("/user", userRoute);
router.use("/book", userBook);


module.exports = router;







