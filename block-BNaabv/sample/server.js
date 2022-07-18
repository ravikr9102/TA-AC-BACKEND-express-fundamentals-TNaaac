var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.use(logger('dev'));
app.use(cookieParser());

app.use((req,res,next) => {
    res.cookie("username","ravi")
    next()
});


// Routes
app.get('/',(req,res) => {
    res.send(`<h1> Welcome to express </h1>`)
});

app.get('/about',(req,res) => {
    res.send('My name is Ravi')
});

app.post('/form',(req,res) =>{
    res.json(req.body)
});

app.post('/json',(req,res) => {
    res.json(req.body);
});

app.get('/users/:username',(req,res) => {
    var username = req.params.username;
    res.send(`<h2>${username}</h2>`)
});

// 404 middleware
app.use((req,res,next) => {
    res.send('Page Not found')
});

// custom middleware
app.use((req,res,next) => {
    res.send(err)
});

// server listening
app.listen(3000,() => {
    console.log('server listening on port 3k');
});