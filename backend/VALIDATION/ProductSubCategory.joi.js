const joi = require('joi')

const schema = joi.object({

    categorycategoryid: joi.string().required(),
    categoryid: joi.string().required(),
    categorycategoryname: joi.string().required()
})


const productSubCategoryValidate = async (req, res, next) => {
    const value = await schema.validate(req.body)

    if (value.error) {
        res.send({ error: value.error.details[0] })
    } else {
        next();
    }
}

module.exports = {productSubCategoryValidate}