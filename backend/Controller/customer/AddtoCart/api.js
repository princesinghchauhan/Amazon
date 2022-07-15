const { connection } = require('../../../connection')

const addtocartGet = async(req, res) => { 
try{
    const query1 = "SELECT * FROM addtocart";

   await connection.query(query1,(err, result) => {
        if (err) {
           return res.send(err.sqlMessage)
        } 
        {
            res.json({ "status": 200, "Response": result })
        }
        })}
    catch(err){
        res.send(err.sqlMessage)
    }
};

const addtocartPost = async(req, res) => {
    try{
    
    const data = {
        cartid: req.body.cartid,
        productid: req.body.productid,
        customermobile: req.body.customermobile,
        qty: req.body.qty,
        addedondate: req.body.addedondate,
        price: req.body.price,
        paymentstatus: req.body.paymentstatus,

    }

    const query1 = "INSERT INTO addtocart SET ? ";
   await connection.query(query1, data,  (err, result) => {
        if (err) {
          return  res.send(err.sqlMessage)
        }  {
            res.json(result)
        }
    })
}catch(err){
    res.send(err.sqlMessage)
}
};

const addtocartDelete = async (req, res) => {
   try{
    const id = req.params.cartid
    const query1 = " DELETE FROM addtocart WHERE cartid = ? "
    await connection.query(query1, id, (err, result) => {
        if (err) {
          return  res.send(err.sqlMessage)
        }  {
            res.json({ status: 200, Response: result })
        }
    })
}
catch(err){
    res.send(err.sqlMessage)
}
};

const addtocartPut = async (req, res) => {
    try{
    const data = [
        req.params.cartid,
        req.body.productid,
        req.body.customermobile,
        req.body.qty,
        req.body.addedondate,
        req.body.price,
        req.body.paymentstatus
    ]
   await connection.query("UPDATE addtocart SET ? WHERE cartid=?", data,(err, result) => {
        if (err){
          return  res.send(err.sqlMessage);
        }
            res.json({ status: 200, Response: result });
        
    })}
    catch(err){
        res.send(err.sqlMessage)
    }
};



module.exports = { addtocartGet, addtocartPost, addtocartDelete, addtocartPut };