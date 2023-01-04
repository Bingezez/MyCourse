const userService = require('./user.service');

module.exports = {
    checkIsUserExists: async (req, res, next) => {
        try {
            const user = await userService.getUserById(req.params.userId);

            if (!user) {
                throw new Error('User is not found');
            }
            
            next();
        } catch (e) {
            res.status(400).json({
                message: e.message
            });
        }
    }
}