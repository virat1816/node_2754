const {
    groceryService
} = require("../services");

const createGrocery = async (req, res) => {
    try {
        const reqBody = req.body

        const grocery = await groceryService.createGrocery(reqBody);
        if (!grocery) {
            throw new Error("something wen twrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: ("Grocery Successfully Create"),
            data: {
                grocery
            }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
const getGrocery = async (req, res) => {
    try {

        const grocery = await groceryService.getGrocery();
        if (!grocery) {
            throw new Error("something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: ("Grocery show"),
            data: {
                grocery
            }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const deleteGrocery = async (req, res) => {
    try {
        const id = req.params.Id
        const grocery = await groceryService.getGrocery();

        let hotel_id = grocery.map((item) => {
            return item.id
        })
        let data = hotel_id.find((item) => {
            return item === id.toString()
        })
        if (!data) {
            return res.status(404).json("Not Found")
        }
        console.log(data);

        if (!grocery) {
            throw new Error("Please provide userId")
        }
        await groceryService.deleteGrocery(id)

        res.status(200).json({
            success: true,
            message: "Grocery successfully deleted",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createGrocery,
    getGrocery,
    deleteGrocery
};