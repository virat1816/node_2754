const {Jewellery} = require("../models/jewellery.model");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createJewellery = async (reqBody) => {
    return Jewellery.create(reqBody);
};

const getJewellery = async () => {
    return Jewellery.find()
};

const deletejewellery = async (Id) => {
    return Jewellery.findByIdAndDelete(Id)
};

const updateDetails = async (categoryId, updateBody) => {
    return Jewellery.findByIdAndUpdate(categoryId, { $set: updateBody });
}


module.exports = {
    createJewellery,
    getJewellery,
    deletejewellery,
    updateDetails
};