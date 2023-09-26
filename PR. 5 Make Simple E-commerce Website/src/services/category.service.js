const Category = require("../models/category.model");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createCategory = async = (reqBody) => {
    return Category.create(reqBody)
}

module.exports = {
    createCategory
};
