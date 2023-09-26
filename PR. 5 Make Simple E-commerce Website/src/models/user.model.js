const { number } = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        trim: true,
    },
    user_email: {
        type: String,
        trim: true,
        required: true
    },
    user_number: {
        type: String,
        trim: true,
        required: true
    },
    user_gender: {
        type: String,
        trim: true,
        required: true
    },
    address: {
        type: String,
        trim: true,
        required: true
    },
    is_active: {
        type: Boolean,
        default:true
    },
},
    {
        timestamps: true,
        versionKey: false
    }
);

const User = mongoose.model("User", userSchema);
module.exports = User;