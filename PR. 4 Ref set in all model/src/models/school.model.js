const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
    school_name: {
        type: String,
        trim: true
    },
    school_address: {
        type: String,
        trim: true
    },
    school_principle: {
        type: String,
        trim: true
    },
    school_time: {
        type: String,
        trim: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    stationry: {
        type: mongoose.Types.ObjectId,
        ref: "stationery"
    }
},
    {
        timestamps: true,
        versionKey: false
    });

const School = mongoose.model("School", schoolSchema);
module.exports = School;