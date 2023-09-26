const {School} = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createschool = async (reqBody) => {
    return School.create(reqBody);
};

const getSchool = async () => {
    return School.find()
};

const deleteschool = async (sclId) => {
    return School.findByIdAndDelete(sclId)
};

const updateDetails = async (categoryId, updateBody) => {
    return School.findByIdAndUpdate(categoryId, { $set: updateBody });
}


module.exports = {
    createschool,
    getSchool,
    deleteschool,
    updateDetails
};