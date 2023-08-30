const express = require("express");
const userRoute = require("./user.route");
const userCategory = require("./category.route");
const userBook = require("./book.route");
const userMobile = require("./mobile.route")
// const userBook = require("./.route");





const router = express.Router();

router.use("/user", userRoute);
router.use('/category',  userCategory) ;
router.use("/book", userBook);

module.exports = router;







