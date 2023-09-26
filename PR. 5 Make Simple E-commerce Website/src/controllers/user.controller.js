const { userService } = require("../services");

const createUser = async (req, res) => {
  try {

    const reqBody = req.body

    const User = await userService.createUser(reqBody);
    if (!User) {
      throw new Error("something wen twrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: ("User Successfully Create"),
      data: { User }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { createUser };

