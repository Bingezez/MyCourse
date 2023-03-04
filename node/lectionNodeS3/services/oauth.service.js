const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = require('../configs/variables');
const { FORGOT_PASSWORD, CONFIRM_ACCOUNT } = require('../configs/actionTokenType.enum');
const { BadRequestError, UnauthorizedError, ServerError } = require('../errors/apiError');

const hashPassword = (password) => bcrypt.hash(password, 10);

const checkHashPassword = async (password, hashPassword) => {
    const isPasswordEquals = await bcrypt.compare(password, hashPassword);

    if (!isPasswordEquals.valueOf()) {
        throw new BadRequestError('Email or password is wrong');
    }
};  

const generateAccessTokenPair = (encodeData = {}) => {
    const accessToken = jwt.sign(encodeData, ACCESS_TOKEN_SECRET, {expiresIn: '15m'});
    const refreshToken = jwt.sign(encodeData, REFRESH_TOKEN_SECRET, {expiresIn: '30d'});

    return {
        accessToken,
        refreshToken
    };
};

const validateTokenDynemically = (tokenType = '', token = '') => {
    try {
        const type = tokenType === 'accessToken' ? ACCESS_TOKEN_SECRET: REFRESH_TOKEN_SECRET;

        return jwt.verify(token, type);
    } catch (e) {
        throw new UnauthorizedError(e.message || 'Invalide Token.');
    }
};

const generateActionToken = (actionType, encodeData = {}) => {
    let expiresIn = '';
    const secretWord = 'test';

    switch (actionType) {
        case FORGOT_PASSWORD:
            expiresIn = '24h';
            // secretWord = 'test';
            break;

        case CONFIRM_ACCOUNT:
            expiresIn = '24h';
            // secretWord = 'test';
            break;
        
        default:
            throw new ServerError('Wrong action type');
    }

    return jwt.sign(encodeData, secretWord, { expiresIn });
};

const validateAccessToken = (token = '') => {
    try {
        return jwt.verify(token, 'test');
    } catch (e) {
        throw new BadRequestError(e.message || 'Invalide Token.');
    }
};

module.exports = {
    hashPassword,
    checkHashPassword,
    validateAccessToken,
    generateActionToken,
    generateAccessTokenPair,
    validateTokenDynemically
};
