const { musicService } = require("../services");

const createMusic = async (req, res) => {
  try {
    const reqBody = req.body

    const music = await musicService.createMusic(reqBody);
    if (!music) {
      throw new Error("something wen twrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: ("School Successfully Create"),
      data: { music }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
const getMusic = async (req, res) => {
  try {

    const music = await musicService.getMusic();
    if (!music) {
      throw new Error("something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: ("School show"),
      data: { music }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteMusic = async (req, res) => {
  try {
    const id = req.params.Id
    const music =await musicService.getMusic();

    let hotel_id = music.map((item)=> {return item.id})
    let data = hotel_id.find((item) => {return item === id.toString()})
    if(!data){ return res.status(404).json("Not Found")}
    console.log(data);

    if (!music) {
      throw new Error("Please provide userId")
    }
    await musicService.deleteMusic(id)

    res.status(200).json({
      success: true,
      message: "School successfully deleted",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message })
  }
}

module.exports = { createMusic, getMusic, deleteMusic };