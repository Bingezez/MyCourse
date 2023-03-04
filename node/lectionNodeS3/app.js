/* eslint-disable no-console */
const path = require('node:path');
const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');

const code = require('./errors/error.codes');

require('dotenv').config({
    path: path.join(__dirname, 'env', `.env.${process.env.NODE_ENV || 'local'}`)
}); // check more info about .env and .env.prod (other .env files)
global.rootPath = __dirname;

const { ApiError } = require('./errors/apiError');
const { mainRouter } = require('./api/api.router');
const { PORT, URL } = require('./configs/variables');


const app = express();

app.use(fileUpload({
    limits: {fieldSize: 50 * 1024 * 1024},
}));

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
