const express =require('express')

const ShopReg = express.Router()

const {shopregistrationget, shopregistrationpost, shopregistrationdelete, shopregistrationput } = require('../../Controller/admin/ShopRegistration/shopreg.api')

ShopReg.get('/shopregistration', shopregistrationget)
ShopReg.post('/shopregistration', shopregistrationpost)
ShopReg.delete('/shopregistration/:registrationnumber', shopregistrationdelete)
ShopReg.put('/shopregistration/:registrationnumber', shopregistrationput)

module.exports = {ShopReg}