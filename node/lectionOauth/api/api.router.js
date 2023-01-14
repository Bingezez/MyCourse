const mainRouter = require('express').Router();
const {userRouter} = require('./user/user.router');

mainRouter.use('/users', userRouter);

module.exports = {
    mainRouter
};
