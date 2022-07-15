const joi = require('joi')

const schema = joi.object({

    registrationnumber : joi.number().integer().min(1).max(100).required(),
    shopid : joi.number().integer().min(1).max(100).required(),
    shopname : joi.string().required(),
    address : joi.string().min(1).max(100).required(),
    state : joi.string().min(1).max(100).required(),
    city: joi.string().min(1).max(9999999999).required(),
    pin: joi.number().integer().min(111111).max(999999).required(),
    contact: joi.number().integer().min(1111111111).max(9999999999).required(),
    ownername: joi.string().min(2).max(100).required(),
    type: joi.string().min(1).max(9999999999).required(),
    email: joi.string(). email().lowercase().min(5).max(99999).required(),
    url: joi.string().min(1).max(9999999).required(),
    turn_over: joi.string().min(1).max(9999999999).required(),
    gstnumber: joi.string().min(1).max(9999999999).required(),
    description: joi.string().min(1).max(9999999999).required(),
    termandcondition : joi.string().min(1).max(9999999999).required(),
    status: joi.string().required()
})


const shopRegistrationValidate = async (req, res, next) => {
    const value = await schema.validate(req.body)

    if (value.error) {
        res.send({ error: value.error.details[0] })
    } else {
        next();
    }
}

module.exports = {shopRegistrationValidate}