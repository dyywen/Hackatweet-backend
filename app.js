var express = require('express');
require("dotenv").config();
var path = require('path');
require("./models/connection");
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tweetRouter = require('./routes/tweets')

var app = express();

const cors = require("cors"); 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tweets', tweetRouter);

module.exports = app;
