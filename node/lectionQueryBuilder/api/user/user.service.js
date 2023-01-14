const User = require('../../dataBase/User');
const { buildFilterQuery } = require('./user.util');

module.exports = {
    // getAllUsers: async () => await User.find(),

    getAllUsers: async (query = {}) => {
        const { page = 1, perPage = 2, sortBy = '_id', order = "ASC", ...filterQuery } = query;
        const skip = (page - 1) * perPage;

        const search = buildFilterQuery(filterQuery);

        const sort = { [sortBy === '_id' ? "_id" : sortBy]: order === "ASC" ? 1 : -1 }; // ASC = 1, DESC = -1

        const users = await User
            .find(search)
            .limit(perPage)
            .skip(skip)
            .sort(sort);
        
        const total = await User.countDocuments(search);

        return {
            data: users,
            page,
            perPage,
            total
        };
    },

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
