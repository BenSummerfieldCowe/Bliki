var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('hbs');

var index = require('./routes/index');
var post = require('./routes/posts');
var newPost = require('./routes/newPost');
var api = require('./routes/api');
var handlebarHelpers = require(path.join(__dirname,'views', 'helpers'));
//Do this to allow spliting helpers up or put all in one file?
var handlebarPostHelpers = require(path.join(__dirname,'views', 'helpers','post.js'));
process.title = "bliki";
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname,'views', 'partial'));
hbs.registerHelper('shortenForHome',handlebarHelpers.shortenForHome);
hbs.registerHelper('createURLForPost',handlebarHelpers.createURLForPost);
hbs.registerHelper('pagination' ,handlebarHelpers.pagination);
hbs.registerHelper('linkKeywords',handlebarPostHelpers.linkKeywords);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/add',newPost);
app.use('/api', api);
app.use('/', index);
app.use('/', post);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
