var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var app = express();


// middleware
app.use(logger('dev'));



app.use('/admin',(req,res,next) => {
    next('Unauthorized')
});

// route
app.get('/',(req,res) => {
    res.send("welcome");
});

app.get('/about',(req,res) => {
    res.send('about page');
});

// 404 handler
app.use((req,res,next) => {
    res.send('page not found');
});

app.use((err,req,res,next) => {
    res.status = 404
    res.send(err);
});

app.listen(3000,() => {
    console.log('server listening on port 3k');
});
