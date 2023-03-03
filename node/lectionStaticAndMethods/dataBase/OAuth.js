const mongoose = require('mongoose');

const OAuthScheme = new mongoose.Schema({
    accessToken: {
        type: String, trim: true, required: true
    }, refreshToken: {
        type: String, trim: true, required: true
    }, _userId: {
        type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'
    }
}, {
    timestamps: true,
    versionKey: false,
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
});

OAuthScheme.virtual('testUser', {
    ref: 'User',
    localField: '_userId',
    foreignField: '_id'
});

// user pre hooks
OAuthScheme.pre(/^find/, function() {
    this.populate('_userId');
    this.populate('testUser');
});

module.exports = mongoose.model('OAuth', OAuthScheme);
