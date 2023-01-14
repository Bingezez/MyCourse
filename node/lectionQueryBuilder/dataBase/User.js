const mongoose = require('mongoose');
const rolesEnum = require('../configs/roles.enum');

const UserScheme = new mongoose.Schema({
    firstName: {
        type: String, trim: true, default: ''
    }, lastName: {
        type: String, trim: true, default: ''
    }, username: {
        type: String, trim: true, required: true, unique: true
    }, email: {
        type: String, trim: true, lowercase: true, required: true, unique: true
    }, age: {
        type: Number
    }, password: {
        type: String, min: 8, required: true, default: ""
    }, role: {
        type: String, enum: Object.values(rolesEnum), default: rolesEnum.USER
    }
}, {
    timestamps: true, versionKey: false
});

module.exports = mongoose.model('User', UserScheme);
