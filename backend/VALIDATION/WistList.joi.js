const joi = require('joi')

const schema = joi.object({

    productid: joi.number().integer().min(1).max(100).required(),
    customermobile: joi.number().integer().min(1000000000).max(9999999999).required(),
    qty: joi.number().integer().min(1).max(100).required(),
    addedondate: joi.date().min(1).max(100).required(),
    price: joi.number().min(1).max(9999999999).required(),
    addedondate: joi.date().required()
})


const wistListValidate = async (req, res, next) => {
    const value = await schema.validate(req.body)

    if (value.error) {
        res.send({ error: value.error.details[0] })
    } else {
        next();
    }
}

module.exports = {wistListValidate}