const { emailService, fileService } = require('../../services');
const { WELCOME } = require('../../configs/emailTypes.enum');
const { CREATED, NO_CONTENT } = require('../../errors/error.codes');

const service = require('./user.service');
const User = require('../../dataBase/User');
const userService = require('./user.service');

module.exports = {
    getMyProfile: async (req, res, next) => {
        try {
            const emailContext = {
                name: req.user.firstName,
                users: await User.find().lean(),
                condition: true
            };

            emailService.sendMail('072001rusand@gmail.com', WELCOME, emailContext);

            res.json(req.user);
        } catch (e) {
            next(e);
        }
    },

    getAllUsers: async (req, res, next) => {
        try {
            const users = await service.getAllUsers(req.query);

            res.send(users);
        } catch (e) {
            next(e);
        }
    },

    getUserById: async (req, res, next) => {
        try {
            res.send(req.locals.user);
        } catch (e) {
            next(e);
        }
    },

    createUser: async (req, res, next) => {
        try {
            await userService.createUser(req.body);

            res.status(CREATED).send('User is create!');
        } catch (e) {
            next(e);
        }
    },

    updateUserById: async (req, res, next) => {
        try {
            await service.updateUserById(req.params.userId, req.body);

            res.status(CREATED).send('User is update!');
        } catch (e) {
            next(e);
        }
    },

    deleteUserById: async (req, res, next) => {
        try {
            await service.deleteUserById(req.params.userId);

            res.status(NO_CONTENT).send('User is delete!');
        } catch (e) {
            next(e);
        }
    },

    uploadUserAvatar: async (req, res, next) => {
        try {
            const data = await fileService.uploadFileToS3(
                req.files.avatar,
                req.params.userId,
                'user'
            );
            res.json(data);            
        } catch (e) {
            next(e);
        }
    }
};
