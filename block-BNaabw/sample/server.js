// requires
var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

// instantiate the app
var app = express();


// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.use(logger('dev'));
app.use(cookieParser());


routes
app.get('/',(req,res) => {
    res.send('hello world')
});

app.get('/users',(req,res) => {
    res.send('users page')
});

// index page route
app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html');
});

// project page route
app.get('/project',(req,res) => {
    res.sendFile(__dirname + '/project.html');
});


//error handler middleware
// 404 middleware
app.use((req,res,next) => {
    res.send('Page not found')
});

// custom  client/server middleware
app.use((err,req,res,next) => {
    res.send(err)
});

// listener
app.listen(3000,() => {
    console.log('server listening on port 3k');
});