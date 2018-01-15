const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const passport = require('passport');
const passportLocal = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');


router.post('/', (req, res) => {
  console.log('login body: ', req.body);

  const { username, password } = req.body;

  // Check for user in db.
  User.findOne(req.body)
    .then(function(user) {
      console.log('User info from promise: ', user);
    })
    .catch(function(err) {
      console.log(err);
    })
})


module.exports = router;
