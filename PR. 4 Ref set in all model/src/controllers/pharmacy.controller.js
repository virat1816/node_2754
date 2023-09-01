const {
    pharmacyService
} = require("../services");

const createPharmacy
= async (req, res) => {
    try {
        const reqBody = req.body

        const pharmacy = await pharmacyService.createPharmacy(reqBody);
        if (!pharmacy) {
            throw new Error("something wen twrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: ("Pharmacy Successfully Create"),
            data: {
                pharmacy
            }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
const getPharmacy = async (req, res) => {
    try {

        const pharmacy = await pharmacyService.getpharmacy();
        if (!pharmacy) {
            throw new Error("something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: ("Pharmacy show"),
            data: {
                pharmacy
            }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const deletePharmacy = async (req, res) => {
    try {
        const id = req.params.Id
        const pharmacy = await pharmacyService.getpharmacy()
        let pharmacy_id = pharmacy.map((item) => {
            return item.id
        })
        let data = pharmacy_id.find((item) => {
            return item === id.toString()
        })
        if (!data) {
            return res.status(404).json("Not Found")
        }
        console.log(data);

        if (!pharmacy) {
            throw new Error("Please provide userId")
        }
        await pharmacyService.deletepharmacy(id)

        res.status(200).json({
            success: true,
            message: "Pharmacy successfully deleted",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createPharmacy,
    getPharmacy,
    deletePharmacy
};