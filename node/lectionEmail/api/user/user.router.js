const userRouter = require('express').Router();
const controller = require('./user.controller');
const middleware = require('./user.middleware');

const authMiddleware = require('../auth/auth.middleware');
const commonMiddleware = require('../../middlewares/common.middlewares');

userRouter.get('/', controller.getAllUsers); // get all users.

userRouter.use('/', middleware.checkIsUserExistsByEmail, middleware.checkIsUserExistsByUsername);
userRouter.post('/', middleware.userValidator, middleware.checkValidData, controller.createUser); // create new user.

userRouter.get('/profile', authMiddleware.validateDynemicallyToken('accessToken'), controller.getMyProfile);

// eslint-disable-next-line max-len
userRouter.use('/:userId', commonMiddleware.objectIdValidator('userId'), middleware.getUserDynemically('userId', 'params', '_id')); // middleware for audit if user is in DB.

// By user id (get user, update user, delete user).
userRouter.get('/:userId', controller.getUserById);
userRouter.put('/:userId', controller.updateUserById);
userRouter.delete('/:userId', controller.deleteUserById);

//export user Router.
module.exports = {
    userRouter
};
