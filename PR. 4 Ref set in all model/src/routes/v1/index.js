const express = require("express");
const tokenRoutes = require("./token.route");
const userRoute = require("./user.route");
const userProduct = require("./product.route");
const userCategory = require("./category.route");
const userBook = require("./book.route");
// const userBook = require("./.route");
const userHotel = require("./hotel.route");
const userbus = require("./bus.route");
const userstationery = require("./stationery.route");
const usermovie = require("./movie.route");
const userschool = require("./school.route");
const usertravel = require("./travel.route.js");
const userpharmacy = require("./pharmacy.route");
const usermusic = require("./music.route.js");
const userjewellery = require("./jewellery.route");
const usergrocery = require("./grocery.route")





const router = express.Router();

router.use("/token", tokenRoutes);
router.use("/user", userRoute);
router.use('/category',  userCategory) ;
router.use('/products', userProduct)
router.use("/book", userBook);
router.use("/hotel", userHotel);
router.use('/bus', userbus) ;
router.use('/stationery' ,userstationery )
router.use( "/movie"  , usermovie );
router.use( '/school' ,userschool );
router.use( '/travel' , usertravel);
router.use( '/pharmacy' ,userpharmacy);
router.use( '/music' ,usermusic);
router.use( '/jewellery' ,userjewellery);
router.use( '/grocery' ,usergrocery);

module.exports = router;







