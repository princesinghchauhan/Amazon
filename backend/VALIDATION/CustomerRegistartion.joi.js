const joi = require('joi')

const schema = joi.object({

    customermobile: joi.string().min(1000000000).max(9999999999).required(),
    customeremail: joi.string().email().lowercase().required(),
    customername: joi.string().min(1).max(100).required(),
    customergender: joi.valid("Male","Female", "male", "female", "MALE", "FEMALE").required(),
    customeraddress: joi.number().integer().min(1).max(1000).required(),
    customerstate: joi.string().min(1).max(9999999999).required(),
    customercity: joi.string().min(1).max(999999).required(),
    customerpin: joi.number().integer().min(100000).max(999999).required()
})


const customerRegistrationValidate = async (req, res, next) => {
    const value = await schema.validate(req.body)

    if (value.error) {
        res.send({ error: value.error.details[0] })
    } else {
        next();
    }
}

module.exports = {customerRegistrationValidate}