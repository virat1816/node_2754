const mongoose = require("mongoose");
const config = require("../config/config");

const PlayerSchema = new mongoose.Schema({
    First_name: {
        type: String,
        trim: true
    },
    Last_name: {
        type: String,
        trim: true
    },
    DOB: {
        type: String,
        trim: true
    },
    Nationality: {
        type: String,
        trim: true
    },
    Gender: {
        type: String,
        trim: true
    },
    Phone: {
        type: Number,
        trim: true
    },
    sport_image: {
        type: String,
        trim: true
    },
    is_active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true,
    versionKey: false,
    toJSON: {
        transform: function (doc, data) {
            if (data ?.sport_image) {
                data.sport_image = `${config.base_url}sport_images/${data.sport_image}`;
            }
        },
    },
});

const Player = mongoose.model("player", PlayerSchema);
module.exports = Player;