const express = require("express");
const router = express.Router();
const musicValidation = require("../../validations/music.validation");
const Controller = require("../../controllers/music.controller");
const validate = require("../../middlewares/validate");


/** Crate Category list */
router.post(
  "/create-music",
  validate(musicValidation.createMusic),
  Controller.createMusic
);

router.get(
  "/List-music",
  validate(musicValidation.getMusic),
  Controller.getMusic
);

router.delete(
  "/delete-music/:Id",
  Controller.deleteMusic
)
module.exports = router;