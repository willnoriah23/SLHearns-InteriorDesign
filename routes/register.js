const express = require('express');
const router = express.Router();
const User = require('../models/user');


router.post('/', (req, res) => {
  const { username, password } = req.body;

  // Check if user is already in the database.
  User.findOne({username})
    .then(function(user) {
      if (user) {
        //status(409)
        res.json({status: "User already exists."});
      } else {
        // Creates a single user.
        User.create({
          username: username,
          password: password
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
