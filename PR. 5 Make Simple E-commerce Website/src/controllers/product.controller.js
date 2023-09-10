const { productService } = require("../services");

const createProduct = async (req, res) => {
  try {

    const reqBody = req.body

    const Product = await productService.createProduct(reqBody);
    if (!Product) {
      throw new Error("something wen twrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: ("Product Successfully Create"),
      data: { Product }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { createProduct };

