const { WELCOME, BANNED } = require('../configs/emailTypes.enum');

module.exports = {
    [WELCOME]: {
        templateName: 'welcome',
        subject: 'welcome on board'
    },
    [BANNED]: {
        templateName: 'banned',
        subject: 'Accout was blocked'
    }
};
