const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { BadRequestError, UnauthorizedError } = require('../errors/apiError');
const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = require('../configs/variables');

const hashPassword = async (password, saltRound = 10) => bcrypt.hash(password, saltRound);

const checkHashPassword = async (password, hashPassword) => {
    const isPasswordEquals = bcrypt.compare(password, hashPassword);

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

const validateToken = () => {

};

const validateAccessToken = (tokenType = '', token = '') => {
    try {
        const type = tokenType === 'accessToken' ? ACCESS_TOKEN_SECRET: REFRESH_TOKEN_SECRET;

        return jwt.verify(token, type);
    } catch (e) {
        throw new UnauthorizedError(e.message || 'Invalide Token.');
    }
};

module.exports = {
    hashPassword,
    validateToken,
    checkHashPassword,
    validateAccessToken,
    generateAccessTokenPair,
};
