const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: mongoose.ObjectId,
  token: String,
  username: String,
  password: String,
  orders: [],
  contacts: []
});

module.exports = mongoose.model("User", userSchema);
