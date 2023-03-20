const mainRouter = require('express').Router();

const { userRouter } = require('./user/user.router');
const { authRouter } = require('./auth/auth.router');
const { fileRouter } = require('./file/file.router');

mainRouter.use('/auth', authRouter);
mainRouter.use('/users', userRouter);
mainRouter.use('/file', fileRouter);

module.exports = {
    mainRouter
};
