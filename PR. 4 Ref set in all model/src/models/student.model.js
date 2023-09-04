const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    student_name: {
        type: String,
        trim: true
    },
    student_email: {
        type: String,
        trim: true
    },
    student_number: {
        type: String,
        trim: true
    },
    student_course: {
        type: String,
        trim: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    // school : {
    //     type : mongoose.Types.ObjectId,
    //     ref : "school"
    // }
},
    {
        timestamps: true,
        versionKey: false
    }
);

const Student = mongoose.model("student", StudentSchema);
module.exports = Student;