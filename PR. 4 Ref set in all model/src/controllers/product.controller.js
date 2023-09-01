const {
    productService
} = require("../services");
const {
    userService
} = require("../services");
const {
    categoryService
} = require("../services");

/* Create product */
const createProduct = async (req, res) => {
    try {
        const reqBody = req.body;
        const product = await productService.createProduct(reqBody);

        if (!product) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "product created successfully",
            data: product
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

/* get product list */
const getProductList = async (req, res) => {
    try {
        const productList = await productService.getProductList(req, res);
        const userList = await userService.getUserList(req, res);
        const categoryList = await categoryService.getCategoryList(req, res);

        res.status(200).json({
            success: true,
            message: "get product list successfully",
            data: {
                productList,
                userList,
                categoryList
            }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

/* delete product */
const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.productId;

        if (!productId) {
            throw new Error("product not found");
        }

        await productService.deleteProduct(deleteId);

        res.status(200).json({
            success: true,
            message: "product deleted successfully",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createProduct,
    getProductList,
    deleteProduct
}