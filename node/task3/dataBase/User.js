const mongoose = require('mongoose');
const rolesEnum = require('../configs/roles.enum');

const UserScheme = new mongoose.Schema({
        fisrtName: {
            type: String,
            trim: true,
            default: ''
        },
        lastName: {
            type: String,
            trim: true,
            default: ''
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            required: true,
            unique: true
        },
        age: {
            type: Number
        },
        role: {
            type: String,
            enum: Object.values(rolesEnum),
            default: rolesEnum.USER
         }    
    }, 
    {
        timestamps: true,
        versionKey: false
    }
);  

module.exports = mongoose.model('User', UserScheme);
