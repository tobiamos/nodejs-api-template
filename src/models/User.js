const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  hash: String,
  salt: String,

}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
