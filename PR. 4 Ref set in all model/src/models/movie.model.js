const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    movie_name: {
        type: String,
        trim: true
    },
    release_year: {
        type: Number,
        trim: true
    },
    actors: {
        type: String,
        trim: true
    },
    directors: {
        type: String,
        trim: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    music : {
        type : mongoose.Types.ObjectId,
        ref:'music'
    }
},
    {
        timestamps: true,
        versionKey: false
    });

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;