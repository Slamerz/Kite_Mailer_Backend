const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  id: mongoose.ObjectId,
  addresseeId: String,
  addressee: String,
  address: String,
  unit: String,
  message: String,
  photos: []
});

module.exports = mongoose.model("Order", orderSchema);
