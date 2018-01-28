const mongoose = require('mongoose');
const Room = require('./roomModel.js');

// SCHEMA SETUP
const userSchema = new mongoose.Schema({
  fullname: {
      type: String,
      required:  true
  },
  email: {
      type: String,
      required:  true
  },
  password: {
      type: String,
      required: true
  },
  room: [{
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Room"
  }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;