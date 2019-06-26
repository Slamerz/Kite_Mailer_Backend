const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: mongoose.ObjectId,
  username: String,
  password: String
});

module.exports = mongoose.model("User", userSchema);
