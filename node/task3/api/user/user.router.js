const userRouter = require('express').Router();
const controller = require('./user.controller');
const middleware = require('./user.middleware');


userRouter.get('/', middleware.checkAllUserExists, controller.getAllUsers); // get all users.
userRouter.post('/', middleware.checkValidData, middleware.checkIsUserExistsByEmail, controller.createUser); // create new user.

userRouter.use('/:userId', middleware.checkIsUserExists); // middleware for audit if user is in DB.
// By user id (get user, update user, delete user).
userRouter.get('/:userId', controller.getUserById);
userRouter.put('/:userId', controller.updateUserById);
userRouter.delete('/:userId', controller.deleteUserById);

//export user Router.
module.exports = {
    userRouter
};