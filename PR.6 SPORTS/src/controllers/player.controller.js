const fs = require("fs");
const {playerService } = require("../services");

// create image
const createPlayer = async (req, res) => {
    try {
        const reqBody = req.body;

        if (req.file) {
            reqBody.sport_image = req.file.filename;
        } else {
            throw new Error("player image is required!");
        }

        const createPlayer = await playerService.createPlayer(reqBody);

        res.status(200).json({
            success: true,
            message: "player image created successfully.",
            data: createPlayer,
        });
    } catch (error) {
        res.status(error?.statusCode || 400).json({
            success: false,
            message:
                error?.message || "Something went wrong, please try again or later!",
        });
    }
};

// get player image list by imageId
const getPlayerById = async (req, res) => {
    try {
        const imageExists = await playerService.getPlayerById(
            req.params.playerId
        );
        if (!imageExists) {
            throw new Error("image not found!");
        }

        res.status(200).json({
            success: true,
            message: "image details get successfully!",
            data: imageExists,
        });
    } catch (error) {
        res.status(error?.statusCode || 400).json({
            success: false,
            message:
                error?.message || "Something went wrong, please try again or later!",
        });
    }
};

/** Get image list */
const getPlayerList = async (req, res) => {
    try {
        const getList = await playerService.getPlayerList(req, res);

        res.status(200).json({
            success: true,
            data: getList,
        });
    } catch (error) {
        res.status(error?.statusCode || 400).json({
            success: false,
            message:
                error?.message || "Something went wrong, please try again or later!",
        });
    }
};

// delete image
const deletePlayer = async (req, res) => {
    try {
        const playerId = req.params.playerId;
        const imageExists = await playerService.getPlayerById(playerId);
        if (!imageExists) {
            throw new Error("image not found!");
        }

        const deletedImage = await playerService.deletePlayer(playerId);
        if (deletedImage) {
            const filePath = `./public/sport_images/${imageExists.sport_image}`;
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }
        } else {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "image delete successfully!",
            data: deletedImage,
        });
    } catch (error) {
        res.status(error?.statusCode || 400).json({
            success: false,
            message:
                error?.message || "Something went wrong, please try again or later!",
        });
    }
};

// update image details
const updatePlayer = async (req, res) => {
    try {
        const reqBody = req.body;
        const playerId = req.params.playerId;
        const imageExists = await playerService.getPlayerById(imageId);
        if (!imageExists) {
            throw new Error("image not found!");
        }

        if (req.file) {
            reqBody.sport_image = req.file.filename;
        }

        const updatedImage = await playerService.updatePlayer(
            playerId,
            reqBody
        );
        if (updatedImage) {
            if (req.file) {
                const filePath = `./public/sports_image/${imageExists.sport_image}`;
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }
            }
        } else {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "image details updated successfully!",
            data: updatedImage,
        });
    } catch (error) {
        res.status(error?.statusCode || 400).json({
            success: false,
            message:
                error?.message || "Something went wrong, please try again or later!",
        });
    }
};


module.exports = {
    createPlayer,
    getPlayerList,
    deletePlayer,
    getPlayerById,
    updatePlayer
}