const mainRouter = require('express').Router();

const {userRouter} = require('./user/user.router');
const {authRouter} = require('./auth/auth.router');

mainRouter.use('/auth', authRouter);
mainRouter.use('/users', userRouter);

module.exports = {
    mainRouter
};
