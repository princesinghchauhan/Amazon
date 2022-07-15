const joi = require('joi')

const schema = joi.object({

    productspecificationid: joi.number().integer().min(1).max(100).required(),
    productid: joi.number().integer().min(1).max(100).required(),
    height: joi.number().integer().min(1).max(100).required(),
    width: joi.number().integer().min(1).max(100).required(),
    size: joi.number().min(1).max(100).required(),
    color: joi.string().required(),
    price: joi.number().min(1).max(9999999999).required(),
    expdate: joi.date().required(),
    manufacturedate: joi.date().required(),
    weight: joi.number().min(1).max(9999999999).required(),
    productphoto: joi.string().required().label('image')
})


const productSpecificationValidate = async (req, res, next) => {
    const value = await schema.validate(req.body)

    if (value.error) {
        res.send({ error: value.error.details[0] })
    } else {
        next();
    }
}

module.exports = {productSpecificationValidate}