const { getFileFromS3, getFileBufferFromS3 } = require("../../services/file.service");

module.exports = {
    getPrivateFile: (req, res, next) => {
        try {
            const fileFromS3 = getFileFromS3(req.query.url);

            res.json({ privateUrl: fileFromS3 });
        } catch (e) {
            next(e);
        }
    },

    getPrivateFileStream: async (req, res, next) => {
        try {
            const { Body, ContentType } = await getFileBufferFromS3(req.query.url);

            res
                .contentType(ContentType)
                .send(Buffer.from(Body, 'binary'));
        } catch (e) {
            next(e);
        }
    }
};
