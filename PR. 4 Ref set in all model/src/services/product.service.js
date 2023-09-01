const {product, Product} = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createProduct = async(reqBody)=>{
    return product.create(reqBody);
};

const getProductList = async(req,res) =>{
    return product.find();
};

const deleteProduct = async(productId) =>{
    return product.findByIdAndDelete(productId);
};
const updateDetails = async (categoryId, updateBody) => {
    return Product.findByIdAndUpdate(categoryId, { $set: updateBody });
}
module.exports = {
    createProduct,
    getProductList,
    deleteProduct
}