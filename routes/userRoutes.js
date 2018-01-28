const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Require all models
var db = require("../models");


const admin = new db.User({
  fullname: process.env.ADMIN_NAME,
  email: process.env.ADMIN_EMAIL,
  password: process.env.ADMIN_PASS,
  admin: true
});

admin.save(function (err, newAdmin) {
  if (err) {
    console.log("Something went wrong. Unable to create admin.");
  } else {
    console.log("Created admin: ", newAdmin);
  }
});

function checkForAdmin(req, res) {
  const { email, password } = req.body;

  db.User.findOne({ email })
    .then(function (data) {
      console.log()
    })
    .catch(function (err) {
      console.log(err);
    })
}

module.exports = router;