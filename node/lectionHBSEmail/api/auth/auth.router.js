const authRouter = require('express').Router();

const controller = require('./auth.controller');
const middleware = require('./auth.middleware');
const userMiddleware = require('../user/user.middleware');

authRouter.post('/', userMiddleware.getUserDynemically('email', 'body'), controller.loginUser);
authRouter.post('/logout', middleware.validateDynemicallyToken('accessToken'), controller.logoutUser);
authRouter.post('/logoutmany', middleware.validateDynemicallyToken('accessToken'), controller.logoutUserMany);
authRouter.post('/refresh', middleware.validateDynemicallyToken('refreshToken'), controller.refreshUser);

module.exports = {
    authRouter
};
