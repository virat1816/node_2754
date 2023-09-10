const { categoryService } = require("../services");

const createCategory = async (req, res) => {
  try {

    const reqBody = req.body

    const Category = await categoryService.createCategory(reqBody);
    if (!Category) {
      throw new Error("something wen twrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: ("Category Successfully Create"),
      data: { Category }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { createCategory };

