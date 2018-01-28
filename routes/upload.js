const express = require("express");
const router = express.Router();
const cloudinary = require('cloudinary');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });
const axios = require('axios');

require('dotenv').config()


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});


router.post('/', upload.single('file'), function fileUploadMiddleware(req, res) {
  cloudinary.uploader.upload_stream((result) => {
    axios({
      url: '/api/upload', //API endpoint that needs file URL from CDN
      method: 'post',
      data: {
        url: result.secure_url,
        name: req.body.name,
        description: req.body.description,
      },
    }).then((response) => {
      res.status(200).json(response.data.data);
    }).catch((error) => {
      res.status(500).json(error.response.data);
    });
  }).end(req.file.buffer);
});


module.exports = router;