const boom = require("boom");
const User  = require("../models/User");

exports.getUsers = async (req, reply) => {
  try {
    return await User.find();
  } catch (err) {
    throw boom.boomify(err);
  }
};

exports.getSingleUser = async (req, reply) => {
  try {
    const id = req.params.id;
    return await User.findById(id);
  } catch (err) {
    throw boom.boomify(err);
  }
};

exports.addUser = async (req, reply) => {
  try {
    const user = new User(req.body);
    return user.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

exports.updateUser = async (req, reply) => {
  try {
    const id = req.params.id;
    const user = req.body;
    const { ...updateData } = user;
    return await User.findByIdAndUpdate(id, updateData, { new: true });
  } catch (err) {
    throw boom.boomify(err);
  }
};

exports.deleteUser = async (req, reply) => {
  try {
    const id = req.params.id;
    return await User.findByIdAndRemove(id);
  } catch (err) {
    throw boom.boomify(err);
  }
};
