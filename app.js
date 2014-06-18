var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var handler = require('./handler').handler;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', users);

app.get('/', routes.getHomePage);
app.get('/login',routes.getLoginPage);
//app.post('/authenticate',routes.getUserHome);
app.post('/userHome',routes.getUserHome);
app.get('/addEvent',routes.getAddEvent);
app.get('/updateEvent',routes.getUpdateEvent);
app.get('/searchEvent',routes.getSearchEvent);
app.get('/deleteEvent',routes.getDeleteEvent);
app.get('/manageParticipants',routes.getManageParticipants);
app.get('/addParticipant',routes.getAddParticipant);
app.get('/deleteParticipant',routes.getDeleteParticipant);

app.post('/addEvent',handler.addRecord);
app.post('/deleteEvent',handler.deleteRecord);
app.post('/addParticipant',handler.addParticipant);
app.post('/updateEvent',handler.updateEvent);
app.post('/searchEvent',handler.searchEvent);
app.post('/addParticipant',handler.addParticipant);
app.post('/deleteParticipant',handler.deleteParticipant);
/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

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
