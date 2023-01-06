const userService = require('./user.service');
const error = require('../../errors/apiError');

module.exports = {
    checkAllUserExists: async (req, res, next) => {
        try {
            const users = await userService.getAllUsers();

            if (!users.length) {
                throw new error.ApiError('We don`t have any user.', 404);
            }
            
            req.users = users;

            next();
        } catch (e) {
            next(e);
        }
    },

    checkIsUserExists: async (req, res, next) => {
        try {
            const user = await userService.getUserById(req.params.userId);

            if (!user) {
                throw new error.ApiError('User is not found.', 404);
            }
            
            req.user = user;

            next();
        } catch (e) {
            next(e);
        }
    },

    checkIsUserExistsByEmail: async (req, res, next) => {
        try {
            const email = req.body.email;
            const user = await userService.getUsersByEmail(email);
            if (user.length) {
                throw new error.ApiError('User is found, please try again (Problem in your email).', 400);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    checkValidData: async (req, res, next) => {
        try {
            // if (res.body?.firstName <=  )
            next();
        } catch (e) {
            next(e);
        }
    }
}