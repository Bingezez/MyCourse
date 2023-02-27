const service = require('./auth.service');
const {oauthService, emailService } = require('../../services');
const { NO_CONTENT } = require('../../errors/error.codes');
const { BANNED } = require('../../configs/emailTypes.enum');

module.exports = {
    loginUser: async (req, res, next) => {
        try {
            const user = req.locals.user; 

            await emailService.sendMail('072001rusand@gmail.com', BANNED, null);
            await oauthService.checkHashPassword(user.password, req.body.password);

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
    }
};
