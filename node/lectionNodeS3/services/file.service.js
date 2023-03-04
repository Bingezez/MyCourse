const path = require('node:path');

const uuid = require('uuid').v4;
const { nanoid } = require('nanoid');
const AWS_S3 = require('aws-sdk/clients/s3');

const { S3_REGION, AWS_SECRET_KEY, AWS_ACCESS_KEY, S3_BUCKET } = require('../configs/variables');

const S3 = new AWS_S3({
    region: S3_REGION,
    secretAccessKey: AWS_SECRET_KEY,
    accessKeyId: AWS_ACCESS_KEY
});

function uploadFileToS3(file, itemId, itemType) {
    const { Key, Body } = fileNameBuilder(file, itemId, itemType);

    return S3.upload({
        Bucket: S3_BUCKET,
        Body,
        Key,
        ACL: 'public-read'
    }).promise();
}

function fileNameBuilder(file, itemId, itemType) {
    const extension = path.extname(file.name);

    return {
        Key: `${itemType}/${itemId}/${nanoid(5)}.${extension}`,
        Body: file.data
    };
}

module.exports = {
    uploadFileToS3,
};
