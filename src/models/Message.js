const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  id: mongoose.ObjectId,
  senderId: mongoose.ObjectId,
  recipientId: String,
  facilityName: String,
  status: String,
  recipient: { firstName: String, lastName: String },
  address: String,
  unit: String,
  message: String,
  photos: [String]
});

module.exports = mongoose.model("Order", orderSchema);
