


const Stationery = require("../models/stationery.model");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createstationery = async (reqBody) => {
    return Stationery.create(reqBody);
};

const getstationery = async () => {
    return Stationery.find()
};

const deletestationery = async (statId) => {
    return Stationery.findByIdAndDelete(statId)
};

const updateDetails = async (categoryId, updateBody) => {
    return Stationery.findByIdAndUpdate(categoryId, { $set: updateBody });
}


module.exports = {
    createstationery,
    getstationery,
    deletestationery,
    updateDetails
};