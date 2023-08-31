const express=require("express");
const {createMobile}=require("../../validations/mobile.validation");
const {mobileController}=require("../../controllers");
const validate  = require("../../middlewares/validate");

const router=express.Router()

router.post(
    "/create-mobile",
    validate(createMobile),
    mobileController.createMobile
)

router.get(
    "/list",
    mobileController.getMobilelist
)

router.get(
    "/get-Details",
    mobileController.getMobileDetails
)

router.put(
    "/update-details/:mobileId",
    mobileController.updateDetails
)

router.delete(
    "/delete-mobile/:mobileId",
    mobileController.deleteMobile,
)

module.exports=router;