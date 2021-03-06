var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var passport = require('passport');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var libraryRouter = require('./routes/library');
var settingsRouter = require('./routes/settings');
var notesRouter = require('./routes/notes');
var notepadRouter = require('./routes/notepad');
var aboutRouter = require('./routes/about');
var methodOverride = require('method-override');

require('dotenv').config();

var app = express();

require('./config/database');
require('./config/passport');



// view engine setup
app.set('views', path.join(__dirname, 'views')); // `/Users/andrewsmith/code/MyBookShelf/views`
app.set('view engine', 'ejs');

app.use(function(req, res, next) {
  req.time = new Date().toLocaleTimeString();
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'SEIRocks!',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

// TODO: remove users from all and put the name of the router instead
app.use('/', indexRouter);
app.use('/users', libraryRouter);
app.use('/users', settingsRouter);
app.use('/users', notepadRouter);
app.use('/users', usersRouter);
app.use('/users', notesRouter);
app.use('/users', aboutRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
