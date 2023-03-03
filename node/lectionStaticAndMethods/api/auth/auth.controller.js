const { NO_CONTENT } = require('../../errors/error.codes');
const { FRONTEND_URL } = require('../../configs/variables');
const { oauthService, emailService } = require('../../services');
const { BANNED, FORGOT_PASSWORD } = require('../../configs/emailTypes.enum');
const { FORGOT_PASSWORD: forgotPasswordAction } = require('../../configs/actionTokenType.enum');

const service = require('./auth.service');
const userService = require('../user/user.service');

module.exports = {
    loginUser: async (req, res, next) => {
        try {
            const user = req.locals.user;

            emailService.sendMail('072001rusand@gmail.com', BANNED);
            
            // transfer password and hashpassword
            await oauthService.checkHashPassword(req.body.password, user.password);

            const tokenPair = oauthService.generateAccessTokenPair({ ...user });
            
            await service.createOauthPair({...tokenPair, _userId: user._id});
            res.json({...tokenPair, _userId: user._id});
        } catch (e) {
            next(e);
        }
    },

    refreshUser: async (req, res, next) => {
        try {
            const user = req.user; 
            const refreshToken = req.get('Authorization');

            await service.deleteOneByParams({refreshToken});

            const newTokenPair = oauthService.generateAccessTokenPair({ ...user });
            
            await service.createOauthPair({...newTokenPair, _userId: user._id});
            res.json({...newTokenPair, _userId: user._id});
        } catch (e) {
            next(e);
        }
    },

    logoutUser: async (req, res, next) => {
        try {
            const accessToken = req.get('Authorization');
            await service.deleteOneByParams({accessToken});
            
            res.status(NO_CONTENT).send('Logout');
        } catch (e) {
            next(e);
        }
    },

    logoutUserMany: async (req, res, next) => {
        try {
            await service.deleteManyByParams({user: req.user._id});

            res.status(NO_CONTENT).send('Logout all');
        } catch (e) {
            next(e);
        }
    },

    sendForgotPasswordEmail: async (req, res, next) => {
        try {
            const user = req.locals.user; 
             
            // Generate action token
            const forgotePasswordToken = oauthService.generateActionToken(
                forgotPasswordAction,
                {email: user.email}
            );

            // Save action token to DB
            await service.createActionToken({
                actionType: forgotPasswordAction,
                token: forgotePasswordToken,
                _userId: req.locals.user._id
            });

            const forgotePassURL = `${FRONTEND_URL}/password/forgot?token=${forgotePasswordToken}`;
            // console.log('URL: ', forgotePassURL);

            await emailService.sendMail('072001rusand@gmail.com', FORGOT_PASSWORD, {forgotePassURL});

            res.send('Ok');
        } catch (e) {
            next(e);
        }
    },

    setForgotPassword: async (req, res, next) => {
        try {
            const { _id: userId } = req.user;
            const hashPassword = await oauthService.hashPassword(req.body.password);

            await userService.updateUserById(userId, { password: hashPassword });
            await service.deleteManyByParams({ user: userId}); // log out from all platforms

            res.send('Ok');
        } catch (e) {
            next(e);
        }
    }
};
