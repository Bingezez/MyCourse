const userService = require('./user.service');
const error = require('../../errors/apiError');

module.exports = {
    checkAllUserExists: async (req, res, next) => {
        try {
            const users = await userService.getAllUsers();

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
                throw new error.NotFoundError('User is not found.');
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

            if (user) {
                throw new error.BadRequestError('User is found, please try again (Problem in your email).');
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    checkIsUserExistsByUsername: async (req, res, next) => {
        try {
            const username = req.body.username;
            const user = await userService.getUsersByUsername(username);

            if (user) {
                throw new error.BadRequestError('User is found, please try again (Problem in your username).');
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    checkValidData: async (req, res, next) => {
        try {
            let count = 0;
            let problems = '';
            const {fisrtName, lastName, username, email, age, password} = req.body;

            if (!fisrtName || !lastName || !username || !email || !age || !password) {
                count++;
                problems += `${count}. Please, fill all fields.\n`;
            }

            if (fisrtName.length < 3 || lastName.length < 3 || username.length < 3) {
                count++;
                problems += `${count}. Please, fill all fields (Problem in your lastName or firstName or username).\n`;
            }

            if (age < 0 || age > 100) {
                count++;
                problems += `${count}. Please, fill all fields (Problem in your age).\n`;
            }

            if (password.length < 8) {
                count++;
                problems += `${count}. your password is less than 8 characters.\n`;
            }

            if (!email.includes('@')) {
                count++;
                problems += `${count}. Please, enter valid data.\n`;
            }

            if (count) {
                throw new error.BadRequestError(problems);
            }

            next();
        } catch (e) {
            next(e);    
        }
    }
};
