// const joi = require('joi')

// const schema = joi.object({

//     cartid: joi.number().integer().min(1).max(100).required(),
//     productid: joi.number().integer().min(1).max(100).required(),
//     customermobile: joi.number().integer().min(1).max(100).required(),
//     qty: joi.number().integer().min(1).max(100).required(),
//     addedondate: joi.number().min(1).max(100).required(),
//     price: joi.number().min(1).max(9999999999).required(),
//     password: joi.string()
//     .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
// })


// const shopRegistrationValidate = async (req, res, next) => {
//     const value = await schema.validate(req.body)

//     if (value.error) {
//         res.send({ error: value.error.details[0] })
//     } else {
//         next();
//     }
// }

// module.exports = {shopRegistrationValidate}