const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: mongoose.ObjectId,
  username: String,
  email: String,
  password: String,
  orders: [mongoose.ObjectId],
  contacts: [mongoose.ObjectId]
});

module.exports = mongoose.model("User", userSchema);
