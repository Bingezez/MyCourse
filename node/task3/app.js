const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // check more info about .env and .env.prod (other .env files)

const { mainRouter } = require('./api/api.router');
const { PORT, URI } = require('./configs/variables');
const { ApiError } = require('./errors/apiError');

const app = express();

// mongoose.set('debug', true);
mongoose.set('strictQuery', true);
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {console.log('Connected!')})
.catch((e) => {console.log(e)});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', mainRouter);
app.use('/*', _notFoundError);
app.use(mainErrorHandler);

app.listen(PORT, () => {    
    console.log(`App listen http://localhost:${PORT} port.`);
});

function _notFoundError(req, res, next) {
    next(new ApiError('Route not found!', 404));
}

function mainErrorHandler(err, req, res, next) {
    res
    .status(err.status || 500)
    .json({
        message: err.message || 'Unknown error'
    });
}