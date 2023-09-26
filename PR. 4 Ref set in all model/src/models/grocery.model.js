const mongoose = require("mongoose");

const GrocerySchema = new mongoose.Schema({
    grocery_name: {
        type: String,
        trim: true
    },
    veg_or_nonveg: {
        type: String,
        trim: true
    },
    Qty: {
        type: String,
        trim: true
    },
    psc: {
        type: String,
        trim: true
    },
    weight: {
        type: String,
        default: true
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "category"
      }
},
    {
        timestamps: true,
        versionKey: false
    });

const Grocery = mongoose.model("Grocery", GrocerySchema);
module.exports = Grocery;