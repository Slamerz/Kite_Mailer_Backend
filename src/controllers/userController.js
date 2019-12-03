const boom = require("boom");
const User = require("../models/User");


exports.getUsers = async (req, reply) => {
  try {
    return await User.find();
  } catch (err) {
    throw boom.boomify(err);
  }
};

exports.getSingleUser = async (req, reply) => {
  try {
    const _id = req.params.id;
    return await User.findById(_id);
  } catch (err) {
    throw boom.boomify(err);
  }
};

exports.addUser = async (req, reply) => {
  try {
    const { firstName, lastName, password, email } = req.body;
    const token = await reply.jwtSign(password);
    const user = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      token: token,
      messages: []
    });
    return user.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

exports.updateUser = async (req, reply) => {
  try {
    const _id = req.params.id;
    const user = req.body;
    const { ...updateData } = user;
    return await User.findByIdAndUpdate(_id, updateData, { new: true });
  } catch (err) {
    throw boom.boomify(err);
  }
};

exports.deleteUser = async (req, reply) => {
  try {
    const _id = req.params._id;
    return await User.findByIdAndRemove(_id);
  } catch (err) {
    throw boom.boomify(err);
  }
};
