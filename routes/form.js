const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');


router.post('/', (req, res) => {
    User.findOne({name})
    .then(function(user) {
      if (user) {
        res.json({status: "We already have this data."});
      } else {
        // Creates a single user.
        User.create({
          name: name,
          email: email,
          password: hash,
          address: address,
          phone: phone,
          bath: {
            master: master,
            second: second
          },
          kitchen: {
            cook: cook
          }
        }, function(err, user) {
          if (err) {
            console.log("Something went wrong");
          } else {
            res.status(200).json({status: "New user created!"})
            console.log(user);

            // Hash password before it is sent to the database
          }
        });
      }
    })
});

module.exports = router;

/*
  bath: {
    master: Boolean,
    second: Boolean
  }
  kitchen: {
    cook: String}
*/