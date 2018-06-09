var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var log4js = require('log4js');
var log = log4js.getLogger('League-1v1');
var bodyParser = require('body-parser');

var apiRouter = require('./routes/index');
var mongoService = require('./services/mongo.service');

var app = express();

// logger middle ware setup
log.level = 'debug';
var loggerMiddleware = (req, res, next) => { req.log = log; next()};
app.use(loggerMiddleware);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(log4js.connectLogger(log4js.getLogger(), { level: 'debug' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);

app.get('/', (req, res, next) => {
  mongoService.getUsers(req.log).then((docs) => {
    const pageConfig = {
      title: 'League 1v1',
      subtitle: 'Users',
      users: docs
    }
    res.render('index', pageConfig);
  });
})
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
