const {
    studentService
} = require("../services");

const createStudent = async (req, res) => {
    try {
        const reqBody = req.body

        const student = await studentService.createStudent(reqBody);
        if (!student) {
            throw new Error("something wen twrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: ("Student Successfully Create"),
            data: {
                student
            }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
const getStudent = async (req, res) => {
    try {

        const student = await studentService.getstudent();
        if (!student) {
            throw new Error("something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: ("student show"),
            data: {
                student
            }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const deleteStudent = async (req, res) => {
    try {
        const id = req.params.Id
        const student = await studentService.getstudent()
        let student_id = student.map((item) => {
            return item.id
        })
        let data = student_id.find((item) => {
            return item === id.toString()
        })
        if (!data) {
            return res.status(404).json("Not Found")
        }
        console.log(data);

        if (!student) {
            throw new Error("Please provide userId")
        }
        await studentService.deletestudent(id)

        res.status(200).json({
            success: true,
            message: "Student successfully deleted",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createStudent,
    getStudent,
    deleteStudent
};