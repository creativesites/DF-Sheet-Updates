const express = require('express');
const createError = require('http-errors');
var logger = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
require('dotenv').config()

let testsRoutes = require('./index')

var app = express();
app.use(cors());

app.use(function(err, req, res, next) {
 
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

const PORT = 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', testsRoutes);

app.use(function(req, res, next) {
    next(createError(404));
});

app.listen(PORT, ()=> console.log(`backend running on port ${PORT}`))