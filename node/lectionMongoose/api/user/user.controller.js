const userService = require('./user.service');
const service = require('./user.service');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await service.getAllUsers();

            res.status(200).send(users);
        } catch (e) {
            res.status(400).send(e.message);
        }
    },

    getUserById: async (req, res) => {
        try {
            const user = await userService.getUserById(req.params.userId);

            res.status(200).send(user);
        } catch (e) {
            res.status(400).send(e.message);
        }
    },

    createUser: async (req, res) => {
        try {
            await userService.createUser(req.body);

            res.status(201).send('User is create!');
        } catch (e) {
            res.status(400).send(e.message);
        }
    },

    updateUserById: async (req, res) => {
        try {
            await service.updateUserById(req.params.userId, req.body);

            res.status(201).send('User is update!');
        } catch (e) {
            res.status(400).send(e.message);
        }
    },

    deleteUserById: async (req, res) => {
        try {
            await service.deleteUserById(req.params.userId);

            res.status(200).send('User is delete!');
        } catch (e) {
            res.status(400).send(e.message);
        }
    }
}
