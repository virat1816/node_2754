const {
    categoryService
} = require("../services");
const {
    userService
} = require("../services");
const {
    productService
} = require("../services");

/* Create category */
const createCategory = async (req, res) => {
    try {
        const reqBody = req.body;
        const category = await categoryService.createCategory(reqBody);

        if (!category) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "category created successfully",
            data: category
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

/* get category list */
const getCategoryList = async (req, res) => {
    try {
        const categoryList = await categoryService.getCategoryList(req, res);
        const userList = await userService.getUserList(req, res);
        const productList = await productService.getProductList(req, res);

        res.status(200).json({
            success: true,
            message: "get category list successfully",
            data: {
                categoryList,
                userList,
                productList
            }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

/* delete category */
const deleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;

        if (!categoryId) {
            throw new Error("category not found");
        }

        await categoryService.deleteCategory(deleteId);

        res.status(200).json({
            success: true,
            message: "category deleted successfully",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createCategory,
    getCategoryList,
    deleteCategory
}