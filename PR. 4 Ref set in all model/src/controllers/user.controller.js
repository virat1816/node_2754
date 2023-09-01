const {
    userService
} = require("../services");
const {
    productService
} = require("../services");
const {
    categoryService
} = require("../services");

/* Create user */
const createUser = async (req, res) => {
    try {
        const reqBody = req.body;
        const user = await userService.createUser(reqBody);

        if (!user) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "user created successfully",
            data: user
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

/* get user list */
const getUserList = async (req, res) => {
    try {
        const userList = await userService.getUserList(req, res);
        const productList = await productService.getProductList(req, res);
        const categoryList = await categoryService.getCategoryList(req, res);

        res.status(200).json({
            success: true,
            message: "get user list successfully",
            data: {
                userList,
                productList,
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

/* delete user */
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;

        if (!userId) {
            throw new Error("user not found");
        }

        await userService.deleteUser(deleteId);

        res.status(200).json({
            success: true,
            message: "user deleted successfully",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createUser,
    getUserList,
    deleteUser
}