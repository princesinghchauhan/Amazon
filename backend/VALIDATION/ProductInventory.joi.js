const joi = require('joi')

const schema = joi.object({
    productid: joi.number().integer().min(1).max(100).required(),
    categoryid: joi.string().min(1).max(100).required(),
    categorycategoryid: joi.number().integer().min(1).max(100).required(),
    productname: joi.string().min(1).max(100).required(),
    productcompany: joi.string().min(1).max(100).required(),
    shopid: joi.number().min(1).max(100).required(),
    qty: joi.number().min(1).max(9999900).required(),
    decription: joi.string().required()
})


const productInventoryValidate = async (req, res, next) => {
    const value = await schema.validate(req.body)

    if (value.error) {
        res.send({ error: value.error.details[0] })
    } else {
        next();
    }
}

module.exports = {productInventoryValidate}