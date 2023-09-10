const e_comServivce = require("../services/e-commerce.service");

const getRecord = async (req, res) => {
  try {
    // const category = await categoryService.getCategoryList();
    // const product = await productService.getProductList();
    // const user = await userService.getUserList();
    const e_commerce = await e_comServivce.getRecordList();

    res.status(200).json({
      success: true,
      message: ("user show"),
      data: { e_commerce }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { getRecord };

