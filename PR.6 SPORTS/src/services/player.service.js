const { player } = require("../models");

// create image
const createPlayer = async (reqBody) => {
    return player.create(reqBody);
};

// get player list
const getPlayerList = async (req,res) => {
    return player.find();
};

// delete player
const deletePlayer = async (playerId) => {
    return player.findOneAndDelete(playerId);
};

// get player details by id
const getPlayerById = async (playerId) => {
    return player.findById(playerId)
};

// update player details
const updatePlayer = async (playerId, reqBody) => {
    return player.findByIdAndUpdate(playerId, { $set: reqBody });
};

module.exports = {
    createPlayer,
    getPlayerList,
    deletePlayer,
    getPlayerById,
    updatePlayer
}
