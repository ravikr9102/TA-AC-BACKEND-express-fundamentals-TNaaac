var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var logger = require('morgan');



// using the third party middelwares  Like morgan and cookie parser 
app.use(logger('dev'));
app.use(cookieParser());

app.use((req,res,next) => {
    console.log(req.cookies);
    next();
})

// custom middleware
app.use((req,res,next) => {
    res.cookie("username","Ravi")
    next();
});

app.get('/about',(req,res) => {
    res.send('send the cookies')
});

//listening the request on the 6K port
app.listen(4000,()=> {
    console.log('server listening on port 4000');
});
