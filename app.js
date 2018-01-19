const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const User = require('./models/user.js');
require('dotenv').config()

// const index = require('./routes/index');
const register = require('./routes/register');
const login = require('./routes/login');

// Mongoose Setup
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true});

const db = mongoose.connection;
db.once('open', () => console.log('Mongoose connection successfully started'));
db.on('error', (err) => console.log("Mongoose error: ", err));

const app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', index);
app.use('/register', register)
app.use('/login', login);



app.listen(3001, () => {
  console.log("Server is starting at port ", 3001);
});
