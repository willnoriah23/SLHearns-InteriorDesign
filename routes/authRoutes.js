const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Require all models
var db = require("../models");

const generateToken = (_id, username) => {
  const token = jwt.sign({
      exp: Math.floor(Date.now() / 1000) + (60 * 60),
      data:{
          _id,
          username
      }
  }, `${process.env.TOKEN_SECRET}`);
  return token;
};

const verifyCookie = (req, res, next) => {
    const { token } = req.cookies;
    jwt.verify(token, `${process.env.TOKEN_SECRET}`, (err, decoded) => {
        if(err){
            res.status(401).json({error:"Access denied"});
        } else{
            next();
        }
    });

};

router.post('/register', (req, res) => {
  const { fullname, email, password } = req.body;

  const salt = bcrypt.genSaltSync(12);
  const hash = bcrypt.hashSync(password, salt);

  User.findOne({fullname})
    .then(function(user) {
      if (user) {
        res.json({status: "User already exists."});
      } else {
        // Creates a single user.
        User.create({
          fullname: fullname,
          email: email,
          password: hash
        }, function(err, user) {
          if (err) {
            console.log("Something went wrong");
          } else {
            res.status(200).json({status: "New user created!"})
            console.log(user);
          }
        });
      }
    })
});


router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const salt = bcrypt.genSaltSync(12);
  const hash = bcrypt.hashSync(password, salt);

  User.findOne({email})
      .then((user) => {
            if (bcrypt.compareSync(password, user.password)) {
              const token = generateToken(user._id, user.username);
              res.cookie("token", token);
              res.status(200).json({status:"User is signed in."});
            } else {
              res.status(400).json({status:'Username or password does not match.'});
            }
      })
      .catch((err) => {
          res.status(400).json({status:"Connection error."});
      });
});


router.get('/users', verifyCookie, (req, res) => {
    res.json({status:"Member signed in successfully!"});

    db.User.findOne({name: req.body.fullname})
    .then(function (user) {
      res.json({
        fullname: req.body.fullname,
        email: req.body.email,
        room: req.body.room
      })
    .catch(function (err) {
      console.log(err)
    })
  });
});


router.get("/logout", (req, res) => {
  //code
});

module.exports = router;
