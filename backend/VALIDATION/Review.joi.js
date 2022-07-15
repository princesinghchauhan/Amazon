const joi = require('joi')

const schema = joi.object({

    customermobile: joi.number().integer().min(6000000000).max(9999999999).required(),
    rating: joi.string().min(10).max(1000).required(),
    message: joi.string().min(1).max(100).required(),
    datetime: joi.date().required()
})


const reviewValidate = async (req, res, next) => {
    const value = await schema.validate(req.body)

    if (value.error) {
        res.send({ error: value.error.details[0] })
    } else {
        next();
    }
}

module.exports = {reviewValidate}