const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  id: mongoose.ObjectId,
  addresseeId: mongoose.ObjectId,
  facilityName: String,
  addressee: { firstName: String, lastName: String },
  address: String,
  unit: String,
  message: String,
  photos: [{ data: Buffer, contentType: String }]
});

module.exports = mongoose.model("Order", orderSchema);
