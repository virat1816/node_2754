const {
    movieService
} = require("../services");

const createMovie = async (req, res) => {
    try {
        const reqBody = req.body

        const movie = await movieService.createMovie(reqBody);
        if (!movie) {
            throw new Error("something wen twrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: ("Movie Successfully Create"),
            data: {
                movie
            }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
const getMovie = async (req, res) => {
    try {

        const movie = await movieService.getMovie();
        if (!movie) {
            throw new Error("something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: ("Movie show"),
            data: {
                movie
            }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const deleteMovie = async (req, res) => {
    try {
        const id = req.params.Id
        const movie = await movieService.getMovie();

        let hotel_id = movie.map((item) => {
            return item.id
        })
        let data = hotel_id.find((item) => {
            return item === id.toString()
        })
        if (!data) {
            return res.status(404).json("Not Found")
        }
        console.log(data);

        if (!movie) {
            throw new Error("Please provide userId")
        }
        await movieService.deleteMovie(id)

        res.status(200).json({
            success: true,
            message: "Movie successfully deleted",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createMovie,
    getMovie,
    deleteMovie
};