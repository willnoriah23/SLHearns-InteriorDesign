const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Require all models
var db = require("../models");



router.get("/admin/user", function(req, res) {
  db.User.findOne({req.body.fullname})
    .then(function (user) {
      res.json({
        fullname: req.body.fullname,
        email: req.body.email,
        room: req.body.room
      })
    });
});

router.get("/admin/users", function(req, res) {
  db.User.find({}, function (err, users) {
    if (err) {
      console.log(err);
    } else {
      res.json({
        fullname: req.body.fullname,
        email: req.body.email,
        room: req.body.room
      });
    }
  });
});


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

// function checkForAdmin(req, res) {
//   const { email, password } = req.body;

//   db.User.findOne({ email })
//     .then(function (data) {
//       console.log()
//     })
//     .catch(function (err) {
//       console.log(err);
//     })
// }


router.post("/questionaire", function (req, res) {
  db.User.findOne({_id})
    .then(function ())
});


module.exports = router;