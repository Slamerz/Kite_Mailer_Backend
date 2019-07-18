const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  id: mongoose.ObjectId,
  senderId: mongoose.ObjectId,
  addresseeId: String,
  facilityName: String,
  status: String,
  addressee: { firstName: String, lastName: String },
  address: String,
  unit: String,
  message: String,
  photos: [String]
});

module.exports = mongoose.model("Order", orderSchema);
