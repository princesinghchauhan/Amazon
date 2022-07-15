const joi = require('joi')

const schema = joi.object({

    cartid: joi.number().integer().min(1).max(100).required(),
    productid: joi.number().integer().min(1).max(100).required(),
    customermobile: joi.number().integer().min(1).max(100).required(),
    qty: joi.number().integer().min(1).max(100).required(),
    addedondate: joi.date().required(),
    price: joi.number().integer().min(1).max(9999999999).required(),
    paymentstatus: joi.valid("Pendding", "Success").required()
})


const addToCartValidate = async (req, res, next) => {
    const value = await schema.validate(req.body)

    if (value.error) {
        res.send({ error: value.error.details[0] })
    } else {
        next();
    }
}

module.exports = {addToCartValidate}