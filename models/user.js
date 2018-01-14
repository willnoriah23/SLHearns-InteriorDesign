const mongoose = require("mongoose");

// SCHEMA SETUP
const userSchema = new mongoose.Schema({
username: String,
password: String
});

let User = mongoose.model("User", userSchema);

module.exports = User;
