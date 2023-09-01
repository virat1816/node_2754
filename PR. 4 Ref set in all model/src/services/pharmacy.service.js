const Pharmacy = require("../models/pharmacy.model");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createPharmacy = async (reqBody) => {
    return Pharmacy.create(reqBody);
};

const getPharmacy = async () => {
    return Pharmacy.find()
};

const deletePharmacy = async (sclId) => {
    return Pharmacy.findByIdAndDelete(sclId)
};

const updateDetails = async (categoryId, updateBody) => {
    return Pharmacy.findByIdAndUpdate(categoryId, { $set: updateBody });
}


module.exports = {
    createPharmacy,
    getPharmacy,
    deletePharmacy,
    updateDetails
};