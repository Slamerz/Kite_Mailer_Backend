const mongoose = require("mongoose");

const contactsSchema = new mongoose.Schema({
  id: mongoose.ObjectId,
  userId: mongoose.ObjectId,
  addresseeId: String,
  facilityName: String,
  addressee: { firstName: String, lastName: String },
  address: String,
  unit: String
});

module.exports = mongoose.model("Contacts", contactsSchema);
