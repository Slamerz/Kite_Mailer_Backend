const boom = require("boom");
const Order = require("../models/Order");

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
    return await Order.fundByID(id);
  } catch (err) {
    throw boom.boomify(err);
  }
};

exports.addOrder = async (req, reply) => {
  try {
    const order = new Order(req.body);
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
