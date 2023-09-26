const express = require("express");
const router = express.Router();
const { playerValidation } = require("../../validation");
const playerController = require("../../controllers/player.controller");
const validate = require("../../middlewares/validate");
const {upload} = require("../../middlewares/upload")

// Create player

router.post(
    "/create-player",
    upload.single("sport_image"),
    // validate(playerValidation.createPlayer),
    playerController.createPlayer
);

// List player
router.get(
    "/list-player",
    validate(playerValidation.listPlayer),
    playerController.getPlayerList
);
// get player by id 
router.get(
    "/get-player",
    playerController.getPlayerById
)

// Delete player
router.delete(
    "/delete-player/:playerId",
    playerController.deletePlayer
);

// Update player
router.put(
    "/update-player/:playerId",
    upload.single("sport_image"),
    playerController.updatePlayer
);

module.exports = router;