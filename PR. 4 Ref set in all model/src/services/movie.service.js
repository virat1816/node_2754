const {Movie} = require("../models/movie.model");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createMovie = async (reqBody) => {
    return Movie.create(reqBody);
};

const getMovie = async () => {
    return Movie.find()
};

const deleteMovie = async (Id) => {
    return Movie.findByIdAndDelete(Id)
};

const updateDetails = async (categoryId, updateBody) => {
    return Movie.findByIdAndUpdate(categoryId, { $set: updateBody });
}


module.exports = {
    createMovie,
    getMovie,
    deleteMovie,
    updateDetails
};