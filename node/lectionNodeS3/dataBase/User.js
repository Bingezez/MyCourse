const mongoose = require('mongoose');
const rolesEnum = require('../configs/roles.enum');

const secureFields = [
    'password',
    'age'
];

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
    timestamps: true,
    versionKey: false,
    toJSON: {
        virtuals: true,
        transform: (doc, ret) => {
            for (const field of secureFields) {
                delete ret[field];
            }

            return ret;
        }
    },
    toObject: {
        virtuals: true,
        transform: (doc, ret) => {
            for (const field of secureFields) {
                delete ret[field];
            }

            return ret;
        }
    }
});

UserScheme.virtual('fullname').get(function() {
    return `${this.firstName} ${this.lastName}`.trim();
});

UserScheme.statics = { // for schema
    myFirstStatic() {
        console.log(this);
    }

};

UserScheme.methods = { // for document
    myFirstMethod() {
        console.log(this);
    }
};

module.exports = mongoose.model('User', UserScheme);
