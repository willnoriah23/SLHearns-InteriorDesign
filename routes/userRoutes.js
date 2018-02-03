const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const formupload = require("../controller/formController.js");

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
    console.log("this is the request", req.body);
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(password, salt);

    db.User.findOne({fullname: req.body.fullname})
        .then(function(user) {
            console.log("this is the user", user);
            if (user) {
                res.json({status: "User already exists."});
            } else {
                // Creates a single user.
                db.User.create({
                    fullname: fullname,
                    email: email,
                    password: hash
                }, function(err, user) {
                    if (err) {
                        console.log("Something went wrong");
                    } else {
                        res.status(200).json({status: "New user created!"});
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

    db.User.findOne({email: email})
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



router.get("/admin/user", function(req, res) {
  var userName = req.body.fullname;
  db.User.findOne({userName})
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


router.route("/questionnaire").post(formupload.formupdate);
router.route("/userform").post(formupload.formupdate);
// router.route("/questionnaire").get((req, res) => {res.send("Hello")});


module.exports = router;