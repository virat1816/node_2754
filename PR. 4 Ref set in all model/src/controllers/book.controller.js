const {bookService} = require("../services");

const createBook = async (req, res) => {
  try {
    //  const category = await Category.find()
    const reqBody = req.body

    const book = await bookService.createBook(reqBody);
    if(!book){
      throw new Error("something wen twrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: ("Books Successfully Create"),
      data: { book }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { createBook };