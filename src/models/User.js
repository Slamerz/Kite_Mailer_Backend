const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  token: String,
  orders: [mongoose.ObjectId]
});

module.exports = mongoose.model("User", userSchema);
