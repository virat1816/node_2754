const {Product} = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createProduct = async(reqBody)=>{
    return Product.create(reqBody);
};

const getProductList = async(req,res) =>{
    return Product.find().populate("category");

};

const deleteProduct = async(productId) =>{
    return Product.findByIdAndDelete(productId);
};
const updateDetails = async (categoryId, updateBody) => {
    return Product.findByIdAndUpdate(categoryId, { $set: updateBody });
}
module.exports = {
    createProduct,
    getProductList,
    deleteProduct,

}