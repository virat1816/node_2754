const User  = require("../models/user.model");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createUser = async = (reqBody) => {
  return User.create(reqBody)
}

module.exports = {
  createUser
};
