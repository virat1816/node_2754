  const Product  = require("../models/product");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createProduct = async = (reqBody) => {
  return Product.create(reqBody)
}

module.exports = {
  createProduct
};
