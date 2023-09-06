const {Book} = require("../models");

/**
 * Create category
 * @param {object} reqBody
 * @returns {Promise<Book>}
 */
const createBook = async (reqBody) => {
  return Book.create(reqBody);
};

module.exports = {createBook}