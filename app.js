var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var routes = require('./routes/index');

var app = module.exports = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

if (app.get('env') !== 'production') {
  console.log('Starting development mode');
  app.use(express.static(path.join(__dirname, 'dist', 'ch-calculator')));
} else {
  console.log('Starting production mode');
  app.use(express.static(path.join(__dirname, 'dist', 'ch-calculator')));
}

// app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'dev') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send('error ' + err.message + ', ' + err);
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
