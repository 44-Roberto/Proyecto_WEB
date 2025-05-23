var createError = require('http-errors');
var express = require('express');
var path = require('path');
const cors = require('cors'); 
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var loginRoutes = require('./routes/login');
var registerRoutes = require('./routes/register');

//ruta del amazon rekognition
var rekognitionRoutes = require('./routes/rekognition');
const recomendacionesRouter = require('./routes/recomendaciones');





var app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', loginRoutes);
app.use('/', registerRoutes);

//amazon rekognition
app.use('/', rekognitionRoutes);
app.use('/api/recomendaciones', recomendacionesRouter);



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
