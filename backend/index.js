// const { addtocartGet, addtocartPost, addtocartDelete, addtocartPut } = require('./Controller/customer/AddtoCart/api');
// const { customerregistrationget, customerregistrationpost, customerregistrationdelete, customerregistrationput } = require('./Controller/customer/CustomerRegistration/customer.api');
// const { paymentGet, paymentPost, paymentDelete, paymentPut } = require('./Controller/customer/MakePayment/makepayment.api');
// const { offersGet, offersPost, offersDelete, offersPut } = require('./Controller/admin/Offers/offer.api');
// const { productget, productpost, productdelete, productput } = require('./Controller/admin/ProductCategory/category.api');
// const { productInventoryGet, productInventoryPost, productInventoryDelete, productInventoryPut } = require('./Controller/shops/ProductInventory/productinventory.api');
// const { productSpecificationGet, productSpecificationPost, productSpecificationDelete, productSpecificationPut } = require('./Controller/shops/ProductSpecification/productspecification.api');
// const { productSubcategoryGet, productSubcategoryPost, productSubcategoryDelete, productSubcategoryPut } = require('./Controller/admin/ProductSubCategory/productsubcategory.api');
// const { reviewGet, reviewPost, reviewDelete, reviewPut } = require('./Controller/customer/Review/review.api');
// const { shippingGet, shippingPost, shippingDelete, shippingPut } = require('./Controller/shipping/Shipping/shipping.api');
// const { shopregistrationget, shopregistrationpost, shopregistrationdelete, shopregistrationput } = require('./Controller/admin/ShopRegistration/shopreg.api');
// const { addtowistlistGet, addtowistlistPost, addtowistlistDelete, addtowistlistPut } = require('./Controller/customer/WistList/wistlist.api')


///////

const {ShopReg} = require('./Routes/Admin/Shopregistration.routes')

const {addToCartValidate} = require('./VALIDATION/AddToCart.joi')
const {customerRegistrationValidate} = require('./VALIDATION/CustomerRegistartion.joi')
const {makePaymentValidate} = require('./VALIDATION/MakePayment.joi')
const {offersValidate} = require('./VALIDATION/Offers.joi')
const {productCategoryValidate} = require('./VALIDATION/ProductCategory.joi')
const {productInventoryValidate} = require('./VALIDATION/ProductInventory.joi')
const {productSpecificationValidate} = require('./VALIDATION/ProductSpecification.joi')
const {productSubCategoryValidate} = require('./VALIDATION/ProductSubCategory.joi')
const {reviewValidate} = require('./VALIDATION/Review.joi')
const {ShippingValidate} = require('./VALIDATION/Shipping.joi')
const {shopRegistrationValidate} = require('./VALIDATION/ShopRegistration.joi')
const {wistListValidate} = require('./VALIDATION/WistList.joi')


/////////////////

const express = require('express');
const app = express();
const port = 4001;
app.use(express.json())
////////////



app.use('/admin', ShopReg)


// AddToCart

// app.get('/addtocart', addtocartGet)
// app.post('/addtocart', addToCartValidate, addtocartPost)
// app.delete('/addtocart/:cartid', addtocartDelete)
// app.put('/addtocart/:cartid', addToCartValidate, addtocartPut) ///N.W


// CutomerRegistration

// app.get('/customerregistration', customerregistrationget)
// app.post('/customerregistration', customerRegistrationValidate, customerregistrationpost)
// app.delete('/customerregistration/:customermobile', customerregistrationdelete)
// app.put('/customerregistration/:customermobile', customerRegistrationValidate,  customerregistrationput) ///not properworking

// MakePayment

// app.get('/makepayment', paymentGet)
// app.post('/makepayment', makePaymentValidate, paymentPost)
// app.delete('/makepayment/:invoice', paymentDelete)
// app.put('/makepayment/:invoice', makePaymentValidate, paymentPut) //n.w

// // Offers

// app.get('/offers', offersGet)
// app.post('/offers', offersValidate,  offersPost)
// app.delete('/offers/:offerid', offersDelete)
// app.put('/offers/:offerid', offersValidate, offersPut) //n.w


// // ProductCategory

// app.get('/productcategory', productget)
// app.post('/productcategory', productCategoryValidate, productpost)
// app.delete('/productcategory/:categoryid', productdelete)
// app.put('/productcategory/:categoryid',productCategoryValidate, productput) //N.W


// // ProductInventory

// app.get('/productinventory', productInventoryGet)
// app.post('./productinventory', productInventoryValidate, productInventoryPost)
// app.delete('/productinventory/:productid', productInventoryDelete)
// app.put('/productinventory/:productid', productInventoryValidate, productInventoryPut)


// // ProductSpecification

// app.get('/productspecification', productSpecificationGet)
// app.post('./productspecification', productSpecificationValidate, productSpecificationPost)
// app.delete('/productspecification/:productid', productSpecificationDelete)
// app.put('/productspecification/:productid', productSpecificationValidate, productSpecificationPut)


// // ProductSubcategory

// app.get('/productsubcategory', productSubcategoryGet)
// app.post('./productsubcategory', productSubCategoryValidate, productSubcategoryPost)
// app.delete('/productsubcategory/:categorycategoryid', productSubcategoryDelete)
// app.put('/productsubcategory/:categorycategoryid', productSubCategoryValidate, productSubcategoryPut)


// // Review

// app.get('/review', reviewGet)
// app.post('./review', reviewValidate, reviewPost)
// app.delete('/review/:customermobile', reviewDelete)
// app.put('/review/:customermobile', reviewValidate, reviewPut)


// //shipping

// app.get('/shipping', shippingGet)
// app.post('./shipping', ShippingValidate , shippingPost)
// app.delete('/shipping/:shippingid', shippingDelete)
// app.put('/shipping/:shippingid', ShippingValidate, shippingPut)



// // shopregistration

// app.get('/shopregistration', shopregistrationget)
// app.post('/shopregistration', shopRegistrationValidate, shopregistrationpost)
// app.delete('/shopregistration/:registrationnumber', shopregistrationdelete)
// app.put('/shopregistration/:registrationnumber', shopRegistrationValidate, shopregistrationput)


// // addtowistlist

// app.get('/addtowistlist', addtowistlistGet)
// app.post('/addtowistlist', wistListValidate, addtowistlistPost)
// app.delete('/addtowistlist/:productid', addtowistlistDelete)
// app.put('/addtowistlist/:productid', wistListValidate, addtowistlistPut)




app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`Server started on http://localhost:${port}`)
    }
})