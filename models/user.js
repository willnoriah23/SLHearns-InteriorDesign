const mongoose = require('mongoose');

// SCHEMA SETUP
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  bath: {
  	master: Boolean,
  	second: Boolean
  },
  kitchen: {
  	cook: String}
});

const User = mongoose.model("User", userSchema);

module.exports = User;
