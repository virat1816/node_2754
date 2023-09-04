const {Hotel}  = require("../models/hotel.model");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createhotel = async (reqBody) => {
  return Hotel.create(reqBody);
};

const gethotelList = async () => {
  return Hotel.find()
};

const deletehotel = async(hotelId) => {
  return Hotel.findByIdAndDelete(hotelId)
};

const updateDetails = async (categoryId, updateBody) => {
  return Hotel.findByIdAndUpdate(categoryId, { $set: updateBody });
}

module.exports = {
  createhotel,
  gethotelList,
  deletehotel,
updateDetails
};