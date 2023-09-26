const User = require("../models/user.model");
const Category = require("../models/product.model");
const Product = require("../models/category.model");

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
