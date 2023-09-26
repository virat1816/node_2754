const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema({
    Destination: {
        type: String,
        trim: true
    },
    start_date: {
        type: String,
        trim: true
    },
    end_date: {
        type: String,
        trim: true
    },
    hotel : {
        type : mongoose.Types.ObjectId,
        ref : "hotel"
    }
},
    {
        timestamps: true,
        versionKey: false
    });

const Travel = mongoose.model("Travel", travelSchema);
module.exports = Travel;