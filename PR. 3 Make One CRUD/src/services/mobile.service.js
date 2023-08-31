const { mobile } = require ("../models");

const createMobile = async (reqBody) => {
  return mobile.create(reqBody);
};
const getMobilelist = async (req, res) => {
  return mobile.find({ $or: [{ is_active: true }] });
};

const getMobileById = async (mobileId) => {
  return mobile.findById(mobileId);
};

const updateDetails = async (mobileId, updateBody) => {
  return mobile.findByIdAndUpdate(mobileId, { $set: updateBody });
};

const deleteMobile = async (mobileId) => {
  return mobile.findByIdAndDelete(mobileId);
};
module.exports = {
  createMobile,
  getMobilelist,
  getMobileById,
  updateDetails,
  deleteMobile,
};