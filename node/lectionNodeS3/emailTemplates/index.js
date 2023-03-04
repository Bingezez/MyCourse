const {
    WELCOME,
    BANNED,
    FORGOT_PASSWORD
} = require('../configs/emailTypes.enum');

module.exports = {
    [WELCOME]: {
        templateName: 'welcome',
        subject: 'welcome on board'
    },
    [BANNED]: {
        templateName: 'banned',
        subject: 'Accout was blocked'
    },
    [FORGOT_PASSWORD]: {
        templateName: 'forgotPassword',
        subject: 'Forgot password' 
    }
};
