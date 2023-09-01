const { jewelleryService } = require("../services");

const createJewellwey = async (req, res) => {
    try {
        const reqBody = req.body
        const jewellery = await jewelleryService.createJewellery(reqBody);
        if (!jewellery) {
            throw new Error("something wen twrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: ("Jewellery Successfully Create"),
            data: { jewellery }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
const getJewellwey = async (req, res) => {
    try {

        const jewellery = await jewelleryService.getJewellery();
        if (!jewellery) {
            throw new Error("something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: ("Jewellery show"),
            data: { jewellery }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const deleteJewellery = async (req, res) => {
    try {
        const id = req.params.Id
        const jewellery = await jewelleryService.getJewellery();

        let pharma_id = jewellery.map((item) => { return item.id })
        let data = pharma_id.find((item) => { return item === id.toString() })
        if (!data) { return res.status(404).json("Not Found") }
        console.log(data);

        if (!jewellery) {
            throw new Error("Please provide userId")
        }
        await jewelleryService.deletejewellery(id)

        res.status(200).json({
            success: true,
            message: "Jewellery successfully deleted",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = { createJewellwey, getJewellwey, deleteJewellery };