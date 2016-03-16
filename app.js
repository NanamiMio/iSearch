var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var routes = require('./routes/index');
var search = require('./routes/search');
var sign = require('./routes/sign');
var user = require('./routes/user');
var users = require('./routes/users');
var admin = require('./routes/admin');
var site = require('./routes/site');
var sites = require('./routes/sites');
var classes = require('./routes/classes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'ourt',
  name: 'iSearch',
  cookie: {maxAge:8000000},
  saveUninitialized: false,
  resave: false
}));

app.use(function (req, res, next) {
  var user = req.session.user;

  if (!user) {
    req.session.user = {
      status: 'Guest',
      permission: 0
    };
  }

  next();
})



app.use('/', routes);
app.use('/search', search);
app.use('/sign', sign);
app.use('/user', user);
app.use('/users', users);
app.use('/admin', admin);
app.use('/site', site);
app.use('/sites', sites);
app.use('/classes', classes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
