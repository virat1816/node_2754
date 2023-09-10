const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    product_name: {
        type: String,
        trim: true
    },
    product_price: {
        type: String,
        trim: true
    },
    product_Qty: {
        type: String,
        trim: true
    },
    product_desc: {
        type: String,
        trim: true
    },
    is_active: {
        type: Boolean,
        default: true
    }
},
    {
        timestamps: true,
        versionKey: false
    });

    const Hotel = mongoose.model("Hotel",hotelSchema);
    module.exports=Hotel;