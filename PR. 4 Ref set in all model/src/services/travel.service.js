const Travel = require("../models/travel.model");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createTravel = async (reqBody) => {
    return Travel.create(reqBody);
};

const getTravelList = async () => {
    return Travel.find()
};

const deleteTravel = async (Id) => {
    return Travel.findByIdAndDelete(Id)
};

const updateDetails = async (categoryId, updateBody) => {
    return Travel.findByIdAndUpdate(categoryId, { $set: updateBody });
}


module.exports = {
    createTravel,
    getTravelList,
    deleteTravel,
    updateDetails
};