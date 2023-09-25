const mongoose = require("mongoose");

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
    // Player_photo: {
    //     type: String,
    //     trim: true
    // },
    is_active: {
        type: Boolean,
        default: true
    },
    team :{
        type:mongoose.Types.ObjectId,
        ref:'team'
    }
},
    {
        timestamps: true,
        versionKey: false
    });

    const Player = mongoose.model("player",PlayerSchema);
    module.exports=Player;