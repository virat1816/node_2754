const { string } = require("joi");
const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
    bus_name: {
        type: String,
        trim: true
    },
    bus_number: {
        type: Number,
        },
    bus_seat_price: {
        type: String,
        trim: true
    },
    bus_company: {
        type: String,
        trim: true,
        required: true
    },
    bus_capacity: {
        type: String,
        trim: true,
        required: true
    },
},
    {
        timestamps: true,
        versionKey: false
    });

    const Bus = mongoose.model("Bus",busSchema);
    module.exports=Bus;
