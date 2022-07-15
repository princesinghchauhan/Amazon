const joi = require('joi')

const schema = joi.object({

    shippingid: joi.number().integer().min(1).max(100).required(),
    invoice: joi.string().min(1).max(1000).required(),
    customermobile: joi.string().min(1000000000).max(9999999999).required(),
    shipdate: joi.date().required(),
    deliverydate: joi.date().required(),
    status: joi.valid("Pending", "Success", "Deley").required()
})


const ShippingValidate = async (req, res, next) => {
    const value = await schema.validate(req.body)

    if (value.error) {
        res.send({ error: value.error.details[0] })
    } else {
        next();
    }
}

module.exports = {ShippingValidate}