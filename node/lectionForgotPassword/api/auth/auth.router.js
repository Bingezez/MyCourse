const authRouter = require('express').Router();

const controller = require('./auth.controller');
const middleware = require('./auth.middleware');
const userMiddleware = require('../user/user.middleware');
const { FORGOT_PASSWORD } = require('../../configs/actionTokenType.enum');

authRouter.post('/logout', middleware.validateDynemicallyToken('accessToken'), controller.logoutUser);
authRouter.post('/logoutmany', middleware.validateDynemicallyToken('accessToken'), controller.logoutUserMany);
authRouter.post('/refresh', middleware.validateDynemicallyToken('refreshToken'), controller.refreshUser);

authRouter.patch(
    '/password/forgot',
    middleware.validateAccessToken(FORGOT_PASSWORD), 
    controller.setForgotPassword
);

authRouter.use(userMiddleware.getUserDynemically('email', 'body'));
authRouter.post('/', controller.loginUser);
authRouter.post('/password/forgot', controller.sendForgotPasswordEmail);

module.exports = {
    authRouter
};
