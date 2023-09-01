const {
    travelService
} = require("../services");

const createTravel = async (req, res) => {
    try {
        const reqBody = req.body

        const travel = await travelService.createTravel(reqBody);
        if (!travel) {
            throw new Error("something wen twrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: ("Travel Successfully Create"),
            data: {
                travel
            }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
const getTravel = async (req, res) => {
    try {

        const travel = await travelService.gettravel();
        if (!travel) {
            throw new Error("something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: ("Travel show"),
            data: {
                travel
            }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const deleteTravel = async (req, res) => {
    try {
        const id = req.params.Id
        const travel = await travelService.gettravel()
        let travel_id = travel.map((item) => {
            return item.id
        })
        let data = hotel_id.find((item) => {
            return item === id.toString()
        })
        if (!data) {
            return res.status(404).json("Not Found")
        }
        console.log(data);

        if (!travel) {
            throw new Error("Please provide userId")
        }
        await travelService.deletetravel(id)

        res.status(200).json({
            success: true,
            message: "Travel successfully deleted",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createTravel,
    getTravel,
    deleteTravel
};