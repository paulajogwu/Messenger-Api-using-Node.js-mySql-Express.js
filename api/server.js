var express = require("express");
var cookieParser = require("cookie-parser");
var bodyParser = require('body-parser')
//var flash = require("connect-flash");
var session = require('express-session')

var index = require('./router/index');
var path = require('path')
var app = express();
app.use(cookieParser());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));




app.use('/', index);

app.use(function (req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});
// custom 500 page 
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

var server = app.listen(2000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("App listening at  http://localhost:" + port);

});
module.exports = app;