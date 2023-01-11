/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config({
    path: path.join(__dirname, 'env', `.env.${process.env.NODE_ENV || 'local'}`)
}); // check more info about .env and .env.prod (other .env files)

const {PORT, URL} = require('./configs/variables');
const {mainRouter} = require('./api/api.router');
const {ApiError} = require('./errors/apiError');

const app = express();

// mongoose.set('debug', true);
mongoose.set('strictQuery', true);
mongoose.connect(URL, {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected!');
    })
    .catch((e) => {
        console.log(e);
    });

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', mainRouter);
app.use('/*', _notFoundError);
app.use(mainErrorHandler);

app.listen(PORT, () => {
    console.log(`App listen http://localhost:${PORT} port.`);
});

function _notFoundError(req, res, next) {
    next(new ApiError('Route not found!', 404));
}

// eslint-disable-next-line
function mainErrorHandler(err, req, res, next) {
    res
        .status(err.status || 500)
        .json({
            message: err.message || 'Unknown error'
        });
}


// DO TO: create constant for status code.
