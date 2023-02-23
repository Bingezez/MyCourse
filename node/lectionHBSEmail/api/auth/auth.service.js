const OAuth = require('../../dataBase/OAuth');

module.exports = {
    createOauthPair: async (tokenData) => await OAuth.create(tokenData),

    getByParams: async (searchData = {}) => await OAuth.findOne(searchData).populate('_userId'),

    
    deleteOneByParams: async (deleteData = {}) => {
        await OAuth.deleteOne(deleteData);
    },

    deleteManyByParams: async (deleteData = {}) => {
        await OAuth.deleteMany(deleteData);
    }
};
