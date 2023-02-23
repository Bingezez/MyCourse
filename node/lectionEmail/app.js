/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const path = require('node:path');

require('dotenv').config({
    path: path.join(__dirname, 'env', `.env.${process.env.NODE_ENV || 'local'}`)
}); // check more info about .env and .env.prod (other .env files)
global.rootPath = __dirname;

const {PORT, URL} = require('./configs/variables');
const {mainRouter} = require('./api/api.router');
const {ApiError} = require('./errors/apiError');

const code = require('./errors/error.codes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', mainRouter);
app.use('/*', _notFoundError);
app.use(mainErrorHandler);

app.listen(PORT, () => {
    console.log(`App listen http://localhost:${PORT} port.`);
    
    mongoose.set('debug', true);
    mongoose.set('strictQuery', true);
    mongoose.connect(URL, {
        useNewUrlParser: true, useUnifiedTopology: true
    })
        .then(() => {
            console.log('You Connected in Mongodb!');
        })
        .catch((e) => {
            console.log(e);
        });
});

function _notFoundError(req, res, next) {
    next(new ApiError('Route not found!', 404));
}

// eslint-disable-next-line
function mainErrorHandler(err, req, res, next) {
    console.log(err);
    res
        .status(err.status || code.SERVER_ERROR)
        .json({
            message: err.message || 'Unknown error'
        });
}

// DO TO: create constant for status code.
