const {Student}  = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createStudent = async (reqBody) => {
  return Student.create(reqBody);
};

const getStudentList = async () => {
  return Student.find()
};

const deleteStudent = async(StudentId) => {
  return Student.findByIdAndDelete(StudentId)
};

const getStudentById = async (StudentId) => {
  return Student.findById(StudentId);
};

const updateDetails = async (StudentId, updateBody) => {
  return Student.findByIdAndUpdate(StudentId, { $set: updateBody });
};

module.exports = {
  createStudent,
  getStudentList,
  deleteStudent,
  getStudentById,
  updateDetails
};