const mongoose = require('mongoose');

const ActionTokenScheme = new mongoose.Schema({
    token: {
        type: String, trim: true, required: true
    }, actionType: {
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

module.exports = mongoose.model('Action_Token', ActionTokenScheme);
