const Bus  = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createBus = async (reqBody) => {
  return Bus.create(reqBody);
};

const getBusList = async () => {
  return Bus.find()
};

const deleteBus = async(busId) => {
  return Bus.findByIdAndDelete(busId)
};

const updateDetails = async (categoryId, updateBody) => {
  return Bus.findByIdAndUpdate(categoryId, { $set: updateBody });
}


module.exports = {
  createBus,
  getBusList,
  deleteBus,
  updateDetails
};