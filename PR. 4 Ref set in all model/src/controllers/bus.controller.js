const {
    busService
} = require("../services");
// const bus = require('../models/bus');

const createBus = async (req, res) => {
    try {
        const reqBody = req.body

        const bus = await busService.createBus(reqBody);
        if (!bus) {
            throw new Error("something wen twrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: ("Bus Successfully Create"),
            data: {
                bus
            }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
const getBus = async (req, res) => {
    try {

        const bus = await busService.getBusList();
        if (!bus) {
            throw new Error("something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: ("Bus show"),
            data: {
                bus
            }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const deleteBus = async (req, res) => {
    try {
        const id = req.params.Id
        const bus = await busService.getBusList()
        let bus_id = bus.map((item) => {
            return item.id
        })
        let data = bus_id.find((item) => {
            return item === id.toString()
        })
        if (!data) {
            return res.status(404).json("Not Found")
        }
        console.log(data);

        if (!bus) {
            throw new Error("Please provide userId")
        }
        await busService.deleteBus(id)

        res.status(200).json({
            success: true,
            message: "bus successfully deleted",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createBus,
    getBus,
    deleteBus
};