const {user, User} = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createUser = async (reqBody)=>{
    return user.create(reqBody);
};

const getUserList = async(req,res)=>{
    return user.find();
}

const deleteUser = async(userId)=>{
    return user.findByIdAndDelete(userId);
};
const updateDetails = async (categoryId, updateBody) => {
    return User.findByIdAndUpdate(categoryId, { $set: updateBody });
}
module.exports = {
    createUser,
    getUserList,
    deleteUser
}