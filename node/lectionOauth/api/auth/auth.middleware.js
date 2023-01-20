const { UnauthorizedError } = require("../../errors/apiError");

const oauthService = require("../../services/oauth.services");
const service = require("./auth.service");

module.exports = {    
    validateDynemicallyToken: (tokenType) => async (req, res, next) => {
        try {
            const token = req.get('Authorization');

            if (!token) {
                throw new UnauthorizedError('No token');
            }

            oauthService.validateAccessToken(tokenType, token);

            const tokenWithuser = await service.getByParams({tokenType: token});

            if (!tokenWithuser) {
                throw new UnauthorizedError('Invalid token');
            }

            req.user = tokenWithuser._userId;

            next();
        } catch (e) {
            next(e);
        }
    }
};
