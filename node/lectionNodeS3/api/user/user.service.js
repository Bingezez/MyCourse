const { oauthService } = require('../../services');
const { buildFilterQuery } = require('./user.util');

const User = require('../../dataBase/User');

module.exports = {
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

    createUser: async (userObject) => {
        const hashPassword = await oauthService.hashPassword(userObject.password);

        await User.create({ ...userObject, password: hashPassword });
    },

    updateUserById: async (userId, user) => {
        await User.findByIdAndUpdate(userId, user, {new: true});
    },

    deleteUserById: async (userId) => {
        await User.findByIdAndDelete(userId);
    },

    getUsersByEmail: async (email) => await User.findOne({email}),

    getUsersByUsername: async (username) => await User.findOne({username}),

    getUsersByParams: async (objectParams) => await User.findOne(objectParams)
};
