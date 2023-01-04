const userRouter = require('express').Router();

const controller = require('./user.controller');
const middleware = require('./user.middleware');

// get all users.
userRouter.get('/', controller.getAllUsers);
// create new user.
userRouter.post('/', controller.createUser);

// By user id (get user, update user, delete user).
userRouter.get('/:userId', controller.getUserById);
userRouter.put('/:userId', middleware.checkIsUserExists, controller.updateUserById);
userRouter.delete('/:userId', controller.deleteUserById);

//export user Router.
module.exports = {
    userRouter
}