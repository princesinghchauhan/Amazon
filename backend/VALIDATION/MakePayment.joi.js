const joi = require('joi')

const schema = joi.object({

    invoice: joi.string().min(1).max(1000).required(),
    cartid: joi.number().integer().min(1).max(100).required(),
    transectionid: joi.number().integer().min(1).max(100).required(),
    date: joi.date().required(),
    time: joi.string().required(),
    amount: joi.number().min(1).max(9999999999).required(),
    offerid: joi.number().min(1).max(9999999999).required(),
    tax: joi.number().integer().min(1).max(99999).required(),
    amount: joi.number().min(1).max(9999999999).required(),
    paymentmode: joi.valid("Pay on delivery", "Credit Card", "Debit Card", "Net Banking", "UPI", "EMI").required(),
    status: joi.valid("Pandding", "Success","Cancel").required()
})


const makePaymentValidate = async (req, res, next) => {
    const value = await schema.validate(req.body)

    if (value.error) {
        res.send({ error: value.error.details[0] })
    } else {
        next();
    }
}

module.exports = {makePaymentValidate}