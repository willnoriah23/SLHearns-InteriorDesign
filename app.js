const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config()


const index = require('./routes/index');
const auth = require('./routes/authRoutes');
const users = require('./routes/userRoutes');



// Mongoose Setup
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_NAME);

const db = mongoose.connection;
db.once('open', () => console.log('Mongoose connection successfully started'));
db.on('error', (err) => console.log("Mongoose error: ", err));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/', auth);
// app.use('/users', users);

app.listen(3001, function(){
  console.log("App is listening on port: ", 3001);
});

module.exports = app;
