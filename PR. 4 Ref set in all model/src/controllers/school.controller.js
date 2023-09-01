const {
    schoolService
} = require("../services");

const createSchool = async (req, res) => {
    try {
        const reqBody = req.body

        const school = await schoolService.createSchool(reqBody);
        if (!school) {
            throw new Error("something wen twrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: ("School Successfully Create"),
            data: {
                school
            }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
const getSchool = async (req, res) => {
    try {

        const school = await schoolService.getschool();
        if (!school) {
            throw new Error("something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: ("School show"),
            data: {
                school
            }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const deleteSchool = async (req, res) => {
    try {
        const id = req.params.Id
        const school = await schoolService.getschool()
        let school_id = school.map((item) => {
            return item.id
        })
        let data = school_id.find((item) => {
            return item === id.toString()
        })
        if (!data) {
            return res.status(404).json("Not Found")
        }
        console.log(data);

        if (!school) {
            throw new Error("Please provide userId")
        }
        await schoolService.deleteschool(id)

        res.status(200).json({
            success: true,
            message: "School successfully deleted",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createSchool,
    getSchool,
    deleteSchool
};