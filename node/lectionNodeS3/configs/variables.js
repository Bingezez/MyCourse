module.exports = {
    PORT: process.env.PORT || 5051,
    URL: process.env.URL,
    FRONTEND_URL: process.env.FRONTEND_URL || 'https://youtube.com',
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'access_secret',
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || 'refresh_secret',

    NO_REPLY_EMAIL: process.env.NO_REPLY_EMAIL,
    NO_REPLY_EMAIL_PASSWORD: process.env.NO_REPLY_EMAIL_PASSWORD,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,

    S3_REGION: process.env.S3_REGION,
    S3_BUCKET: process.env.S3_BUCKET,
    AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
    AWS_SECRET_KEY: process.env.AWS_SECRET_KEY
};
