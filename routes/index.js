var express = require('express');
var router = express.Router();
const db = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/register", (req, res) => {
  console.log("Req body: ", req.body);
})

module.exports = router;
