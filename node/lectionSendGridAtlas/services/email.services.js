const path = require('node:path');
const nodemailer = require('nodemailer');
const templetesInfo = require('../emailTemplates');
const hbs = require('nodemailer-express-handlebars');

const { ServerError } = require('../errors/apiError');
const { NO_REPLY_EMAIL, NO_REPLY_EMAIL_PASSWORD, FRONTEND_URL } = require('../configs/variables');

const sendMail = async (receiverEmail, emailType, context = {} ) => {
    context ||= {}; // to avoid null in some cases

    const templateConfig = templetesInfo[emailType];

    if (!templateConfig) {
        throw new ServerError('Wrong template name');
    }

    Object.assign(context, {frontUrl: FRONTEND_URL});

    const options = {
        extName: '.hbs',
        viewPath: path.join(global.rootPath, 'emailTemplates', 'views'),
        viewEngine: {
            defaultLayout: 'main',
            layoutsDir: path.join(global.rootPath, 'emailTemplates', 'layouts'),
            partialsDir: path.join(global.rootPath, 'emailTemplates', 'partials'),
            extname: '.hbs',
        }
    };

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: NO_REPLY_EMAIL,
            pass: NO_REPLY_EMAIL_PASSWORD
        }
    });
    
    transporter.use('compile', hbs(options));

    return transporter.sendMail({
        from: 'No name',
        to: receiverEmail,
        subject: templateConfig.subject,
        template: templateConfig.templateName,
        context
    });
};

module.exports = {
    sendMail
};
