const User = require('../../dataBase/User');

module.exports = {
    getAllUsers: async () => {
        return await User.find();
    },

    getUserById: async (userId) => {
        return await User.findById(userId);
    },

    createUser: async (userObject) => {
        await User.create(userObject);
    },

    updateUserById: async (userId, user) => {
        await User.findByIdAndUpdate(userId, user);
    },

    deleteUserById: async (userId) => {
        await User.findByIdAndDelete(userId);
    },

    getUsersByEmail: async (userEmail) => {
        return await User.find({"email": userEmail});
    },
}
