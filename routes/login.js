const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.js');


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
    const {token} = req.cookies;
    jwt.verify(token, `${process.env.TOKEN_SECRET}`, (err, decoded) => {
        if(err){
            res.status(401).json({error:"No Access buddy"});
        } else{
            next();
        }
    });

};


router.post("/", (req, res) => {
    const {username, password} = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    User.findOne({username})
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


router.get('/member', verifyCookie, (req, res) => {
    res.json({status:"Member signed in successfully"});
});


module.exports = router;
