const OAuth = require('../../dataBase/OAuth');
const ActionToken = require('../../dataBase/ActionToken');

module.exports = {
    createOauthPair: async (tokenData) => await OAuth.create(tokenData),

    getByParams: async (searchData = {}) => await OAuth.findOne(searchData).populate('_userId'),

    deleteOneByParams: async (deleteData = {}) => {
        await OAuth.deleteOne(deleteData);
    },

    deleteManyByParams: async (deleteData = {}) => {
        await OAuth.deleteMany(deleteData);
    },

    // Action Token Scheme functions
    createActionToken: async (tokenData) => await ActionToken.create(tokenData),

    deleteActionTokenByParams: async (deleteData = {}) => {
        await ActionToken.deleteOne(deleteData);
    },

    findActionTokenByParams: async (searchData = {}) => await ActionToken.findOne(searchData)
};
