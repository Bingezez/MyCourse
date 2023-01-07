const userService = require('./user.service');
const service = require('./user.service');

module.exports = {
    getAllUsers: async (req, res, next) => {
        try {
            res.status(200).send(req.users);
        } catch (e) {
            next(e);
        }
    },

    getUserById: async (req, res, next) => {
        try {
            res.status(200).send(req.user);
        } catch (e) {
            next(e);
        }
    },

    createUser: async (req, res, next) => {
        try {
            await userService.createUser(req.body);

            res.status(201).send('User is create!');
        } catch (e) {
            next(e);
        }
    },

    updateUserById: async (req, res, next) => {
        try {
            await service.updateUserById(req.params.userId, req.body);

            res.status(201).send('User is update!');
        } catch (e) {
            next(e);
        }
    },

    deleteUserById: async (req, res, next) => {
        try {
            await service.deleteUserById(req.params.userId);

            res.status(200).send('User is delete!');
        } catch (e) {
            next(e);
        }
    }
};
