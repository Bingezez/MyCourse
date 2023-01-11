const User = require('../../dataBase/User');

module.exports = {
    getAllUsers: async () => await User.find(),

    getUserById: async (userId) => await User.findById(userId),

    createUser: async (userObject) => {
        await User.create(userObject);
    },

    updateUserById: async (userId, user) => {
        await User.findByIdAndUpdate(userId, user);
    },

    deleteUserById: async (userId) => {
        await User.findByIdAndDelete(userId);
    },

    getUsersByEmail: async (email) => await User.findOne({email}),

    getUsersByUsername: async (username) => await User.findOne({username})
};
