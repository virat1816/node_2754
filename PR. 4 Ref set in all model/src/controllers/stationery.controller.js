const { stationeryService } = require("../services");

const createStationery = async (req, res) => {
  try {
    const reqBody = req.body

    const stationery = await stationeryService.createstationery(reqBody);
    if (!stationery) {
      throw new Error("something wen twrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: ("Stationery Successfully Create"),
      data: { stationery }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
const getStationery = async (req, res) => {
  try {

    const stationery = await stationeryService.getstationery();
    if (!stationery) {
      throw new Error("something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: ("Stationery show"),
      data: { stationery }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteStationery = async (req, res) => {
  try {
    const id = req.params.Id
    const stationery =await stationeryService.getstationery()
    let hotel_id = stationery.map((item)=> {return item.id})
    let data = hotel_id.find((item) => {return item === id.toString()})
    if(!data){ return res.status(404).json("Not Found")}
    console.log(data);

    if (!stationery) {
      throw new Error("Please provide userId")
    }
    await stationeryService.deletestationery(id)

    res.status(200).json({
      success: true,
      message: "Stationery successfully deleted",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message })
  }
}

module.exports = { createStationery, getStationery, deleteStationery };