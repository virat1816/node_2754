const User = require("../models/user");
const Category = require("../models/product");
const Product = require("../models/category");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const getRecordList = async () => {
  return User.find(), Category.find() , Product.find()
};

module.exports = {
  getRecordList
};
