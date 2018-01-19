const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');


router.post('/', (req, res) => {
  const { username, password } = req.body;

  const salt = bcrypt.genSaltSync(12);
  const hash = bcrypt.hashSync(password, salt);

  User.findOne({username})
    .then(function(user) {
      if (user) {
        res.json({status: "User already exists."});
      } else {
        // Creates a single user.
        User.create({
          username: username,
          password: hash
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
