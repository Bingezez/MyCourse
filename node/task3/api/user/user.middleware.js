const userService = require('./user.service');
const error = require('../../errors/apiError');

module.exports = {
    checkIsUserExists: async (req, res, next) => {
        try {
            const user = await userService.getUserById(req.params.userId);

            if (!user) {
                throw new error.ApiError('User is not found', 404);
            }
            
            next();
        } catch (e) {
            res.status(400).json({
                message: e.message
            });
        }
    }
}