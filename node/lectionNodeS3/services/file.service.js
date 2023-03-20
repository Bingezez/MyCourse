const path = require('node:path');

// const uuid = require('uuid').v4;
const { nanoid } = require('nanoid');
const AWS_S3 = require('aws-sdk/clients/s3');

const { S3_REGION, AWS_SECRET_KEY, AWS_ACCESS_KEY, S3_BUCKET } = require('../configs/variables');

const S3 = new AWS_S3({
    region: S3_REGION,
    secretAccessKey: AWS_SECRET_KEY,
    accessKeyId: AWS_ACCESS_KEY
}); // add apiVersion and signatureVersion

async function uploadFileToS3(file, itemId, itemType) {
    const { Key, Body, ContentType } = fileNameBuilder(file, itemId, itemType);

    await S3.upload({
        Bucket: S3_BUCKET,
        Body,
        Key,
        ContentType 
    }).promise();

    // return `/api/files/private?url=${Key}`;
    return Key;
}

function getFileFromS3(Key) {
    return S3.getSignedUrl('getObject', {
        Key,
        Bucket: S3_BUCKET,
        Expires: 5 * 60 * 60
    });
}

function getFileBufferFromS3(Key) {
    return S3.getObject({
        Key,
        Bucket: S3_BUCKET
    }).promise();
}

function fileNameBuilder(file, itemId, itemType) {
    const extension = path.extname(file.name);

    return {
        Key: `${itemType}/${itemId}/${nanoid(5)}.${extension}`,
        Body: file.data,
        ContentType: file.mimetype
    };
}

module.exports = {
    uploadFileToS3,
    getFileFromS3,
    getFileBufferFromS3
};
