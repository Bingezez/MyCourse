const { UnauthorizedError, BadRequestError } = require("../../errors/apiError");

const service = require("./auth.service");
const oauthService = require("../../services/oauth.service");

module.exports = {    
    validateDynemicallyToken: (tokenType) => async (req, res, next) => {
        try {
            const token = req.get('Authorization');

            if (!token) {
                throw new UnauthorizedError('No token');
            }

            oauthService.validateTokenDynemically(tokenType, token);

            const tokenWithUser = await service.getByParams({tokenType: token});

            if (!tokenWithUser) {
                throw new UnauthorizedError('Invalid token');
            }

            req.user = tokenWithUser._userId;
            next();
        } catch (e) {
            next(e);
        }
    },

    validateAccessToken: (actionType) => async (req, res, next) => {
        try {
            const token = req.get('Authorization');

            if (!token) {
                throw new UnauthorizedError('No token');
            }

            await oauthService.validateAccessToken(token);
            
            const actionTokenWithUser = await service.findActionTokenByParams({token, actionType});

            if (!actionTokenWithUser) {
                throw new BadRequestError('Invalid token');
            }

            req.user = actionTokenWithUser._userId;

            await service.deleteActionTokenByParams({ token });

            next();
        } catch (e) {
            next(e);
        }
    }   
};
