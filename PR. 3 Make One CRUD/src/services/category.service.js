const {
    category
} = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createCategory = async (reqBody) => {
    return category.create(reqBody);
};

const getCategoryList = async (req, res) => {
    return category.find();
};

const deleteCategory = async (categoryId) => {
    return category.findByIdAndDelete(categoryId);
};
const updateDetails = async (categoryId, updateBody) => {
    return Category.findByIdAndUpdate(categoryId, {
        $set: updateBody
    });
}

module.exports = {
    createCategory,
    getCategoryList,
    deleteCategory
}