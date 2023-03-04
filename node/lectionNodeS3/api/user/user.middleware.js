const { userSchema } = require('../user/user.validator');
const { NotFoundError, BadRequestError } = require('../../errors/apiError');

const userService = require('./user.service');

module.exports = {
    getUserDynemically: (paramName, from, dbField = paramName) => async (req, res, next) => {
        try {
            // req.from.paramName!
            const user = await userService.getUsersByParams({[dbField]: req[from][paramName]});

            if (!user) {
                throw new NotFoundError('User is not found!');
            }

            req.locals = {...req.locals, user};

            next();
        } catch (e) {
            next(e);
        }
    },

    userValidator: (req, res, next) => {
        try {
            const { error, value } = userSchema.validate(req.body);

            if (error) {
                throw new BadRequestError(error);
            }
            
            req.body = value;
            
            next();
        } catch (e) {
            next(e);
        }
    },
    
    checkIsUserExistsByEmail: async (req, res, next) => {
        try {
            const user = await userService.getUsersByEmail(req.body.email);

            if (user) {
                throw new BadRequestError('User is found by email!');
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    checkIsUserExistsByUsername: async (req, res, next) => {
        try {
            const user = await userService.getUsersByUsername(req.body.username);

            if (user) {
                throw new BadRequestError('User is found by username!');
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
            const {firstName, lastName, username, email, age, password} = req.body;

            if (!firstName || !lastName || !username || !email || !age || !password) {
                count++;
                problems += `${count}. Please, fill all fields.\n`;
            }

            if (firstName.length < 3 || lastName.length < 3 || username.length < 3) {
                count++;
                problems += `${count}. Please, fill correct all fields (Problem in your lastName or firstName or username).\n`;
            }

            if (age < 0 || age > 100) {
                count++;
                problems += `${count}. Please, correct fill your age.\n`;
            }

            if (password.length < 8) {
                count++;
                problems += `${count}. Your password is less than 8 characters.\n`;
            }

            if (!email.includes('@')) {
                count++;
                problems += `${count}. Please, enter valid data.\n`;
            }

            if (count) {
                throw new BadRequestError(problems);
            }

            next();
        } catch (e) {
            next(e);    
        }
    }
};
