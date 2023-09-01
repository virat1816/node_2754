const mongoose = require("mongoose");

const jewellerySchema = new mongoose.Schema({
    jewellery_name: {
        type: String,
        trim: true
    },
    jewellery_price: {
        type: String,
        trim: true
    },
    jewellery_design: {
        type: String,
        trim: true
    },
    Jewellery_materials: {
        type: String,
        trim: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    category :{
        type : mongoose.Types.ObjectId,
        ref : "category"
    }
},
    {
        timestamps: true,
        versionKey: false
    });

const Jewellery = mongoose.model("Jewellery", jewellerySchema);
module.exports = Jewellery;