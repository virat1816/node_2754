const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    category_name: {
        type: String,
        trim: true
    },
    category_item: {
        type: String,
        trim: true
    },
    category_desc: {
        type: String,
        trim: true
    },
    is_active: {
        default: true,
        type: Boolean
    },
},
    {
        timestamps: true,
        versionKey: false
    });

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;