const userService = require('./user.service');
const service = require('./user.service');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await service.getAllUsers();

            res.json(users);
        } catch (e) {
            res.status(400).json({
                message: e.message
            });
        }
    },

    getUserById: async (req, res) => {
        try {
            const user = await userService.getUserById(req.params.userId);

            res.json(user);
        } catch (e) {
            res.status(400).json({
                message: e.message
            });
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
            const updatedUser = await service.updateUserById(req.params.userId, req.body);

            res.status(201).send(updatedUser);
        } catch (e) {
            res.status(400).send(e.message);
        }
    },

    deleteUserById: async (req, res) => {
        try {
            const deletedUser = await service.deleteUserById(req.params.userId);

            res.status(201).send(deletedUser);
        } catch (e) {
            res.status(400).send(e.message);
        }
    }
}
