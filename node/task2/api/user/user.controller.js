const service = require('./user.service');

module.exports = {
    getAllUsers: (req, res) => {
        const users = service.getAllUsers();
        res.json(users);
    },

    getUserById: async (req, res) => {
        try {
            const user = await service.getUserById(req.params.userId);

            res.json(user);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    createUser: async (req, res) => {
        try {
        const createdUser = await service.createUser(req.body);

        res.status(201).json(createdUser);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    updateUserById: async (req, res) => {
        try {
            const updatedUser = await service.updateUserById(req.params.userId, req.body);

            res.status(201).json(updatedUser);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    deleteUserById: async (req, res) => {
        try {
            const deletedUser = await service.deleteUserById(req.params.userId);

            res.status(201).json(deletedUser);
        } catch (e) {
            res.status(400).json(e.message);
        }
    }
}