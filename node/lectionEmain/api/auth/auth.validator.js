// COPY

// const Joi = require('joi');
// const { EMAIL_REGEXP, PASSWORD_REGEXP, USERNAME_REGEXP } = require('../../configs/regexp.enum');

// // const userCarSubSchema = Joi.object({
// //     model: Joi.string().required(),
// //     // color: Joi.string().allow(28).required()
// //     color: Joi.string().valid('red', 'blue', 'white').required()

// // });

// const userSchema = Joi.object({
//     firstName: Joi.string().alphanum().min(3).max(64).trim(),
//     lastName: Joi.string().alphanum().min(3).max(64).trim(),

//     username: Joi.string().regex(USERNAME_REGEXP).required().trim().error(new Error('Username is not valid')),
//     email: Joi.string().regex(EMAIL_REGEXP).required().lowercase().trim().error(new Error('Email is not valid')),
//     password: Joi.string().regex(PASSWORD_REGEXP).required().trim().error(new Error('Password is not valid')),

//     age: Joi.number().integer().min(1).max(100)

//     // test version
//     // cars: Joi.array().items(userCarSubSchema).unique().when('girl', {is: true, then: Joi.required()}),

//     // girl: Joi.boolean()
// });

// module.exports = {
//     userSchema
// };

// // TO DO Joi validation for role
