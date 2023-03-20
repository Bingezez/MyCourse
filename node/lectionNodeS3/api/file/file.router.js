const fileRouter = require('express').Router();

const { validateDynemicallyToken } = require('../auth/auth.middleware');

const controller = require('./file.controller');

// fileRouter.use(validateDynemicallyToken('accessToken'));
fileRouter.get('/private', controller.getPrivateFile);
fileRouter.get('/private2', controller.getPrivateFileStream);

module.exports = {
    fileRouter
};
