const boom = require("boom");
const Order = require("../models/Order");
const mongoose = require("mongoose");
exports.getOrders = async (req, reply) => {
  try {
    return await Order.find();
  } catch (err) {
    throw boom.boomify(err);
  }
};

exports.getSingleOrder = async (req, reply) => {
  try {
    const id = req.params.id;
    return await Order.findById(id);
  } catch (err) {
    throw boom.boomify(err);
  }
};

exports.addOrder = async (req, reply) => {
  try {
    const order = new Order({
      address: req.body.address,
      id: mongoose.Types.ObjectId(),
      senderId: req.body.senderId,
      facilityName: req.body.facilityName,
      addresseeId: req.body.addresseeId,
      status: req.body.status,
      addressee: req.body.addressee,
      unit: req.body.unit,
      message: req.body.message,
      photos: req.body.photos
    });
    return order.save();
  } catch (err) {
    boom.boomify(err);
  }
};

exports.deleteOrder = async (req, reply) => {
  try {
    const id = req.params.id;
    return await Order.findByIdAndRemove(id);
  } catch (err) {
    throw boom.boomify(err);
  }
};
