const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/SLHearnsDB";
require('dotenv').config();


<<<<<<< HEAD
const index = require('./routes/index');
const auth = require('./routes/authRoutes');
=======
// const index = require('./routes/index');
// const auth = require('./routes/authRoutes');
>>>>>>> c736655359a66047537c6cebef0cc48ea7e1d65b
const users = require('./routes/userRoutes');



// Mongoose Setup
mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI, {
    useMongoClient: true
});

const db = mongoose.connection;
db.once('open', () => console.log('Mongoose connection successfully started'));
db.on('error', (err) => console.log("Mongoose error: ", err));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

<<<<<<< HEAD
app.use('/api/', index);
app.use('/api/auth', auth);
=======

// app.use('/api/', index);
app.use('/api/', users);
>>>>>>> c736655359a66047537c6cebef0cc48ea7e1d65b
app.get('*', (res, req) => {
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
// app.use('/users', users);

app.listen(process.env.PORT || 3001, function(){
  console.log("App is listening on port: ", 3001);
});

module.exports = app;
