const joi = require('joi')

const schema = joi.object({

    offerid: joi.number().min(1).max(9999999999).required(),
    couponcode: joi.number().integer().min(1).max(100).required(),
    fromdate: joi.date().required(),
    todate: joi.date().required(),
    flatdiscount: joi.number().integer().min(1).max(100).required(),
    validin: joi.string().required(),
    bankoffer: joi.string().required()
})


const offersValidate = async (req, res, next) => {
    const value = await schema.validate(req.body)

    if (value.error) {
        res.send({ error: value.error.details[0] })
    } else {
        next();
    }
}

module.exports = {offersValidate}