const nodemailer = require('nodemailer');
const EmailTemplate = require('email-templates');
const templetesInfo = require('../emailTemplates');

const path = require('node:path');

const { NO_REPLY_EMAIL, NO_REPLY_EMAIL_PASSWORD, FRONTEND_URL } = require('../configs/variables');
const { ServerError } = require('../errors/apiError');

const sendMail = async (receiverEmail, emailType, locals = {}) => {
    const templateParser = new EmailTemplate({
        views: {
            root: path.join(global.rootPath, 'emailTemplates')
        }
    });

    const templateConfig = templetesInfo[emailType];

    if (!templateConfig) {
        throw new ServerError('Wrong template name');
    }

    Object.assign(locals || {}, {frontUrl: FRONTEND_URL});

    const html = await templateParser.render(templateConfig.templateName, locals);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: NO_REPLY_EMAIL,
            pass: NO_REPLY_EMAIL_PASSWORD
        }
    });

    return transporter.sendMail({
        from: 'No name',
        to: receiverEmail,
        subject: templateConfig.subject,
        html
    });
};

module.exports = {
    sendMail
};
