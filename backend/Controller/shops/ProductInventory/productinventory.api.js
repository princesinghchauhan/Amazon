const { connection } = require('../connection')


const productInventoryGet = async (req, res) => {
    try {
        const query1 = "SELECT * FROM productinventory"
        await connection.query(query1, (err, result) => {
            if (err) {
                return res.send(err.sqlMessage)
            } {
                res.send(result)
            }
        })
    }
    catch (err) {
        res.send(err.sqlMessage)

    }
}

const productInventoryPost = async (req, res) => {
    try {
        const data = {
            productid: req.body.productid,
            categoryid: req.body.categoryid,
            categorycategoryid: req.body.categorycategoryid,
            productname: req.body.productname,
            productcompany: req.body.productcompany,
            shopid: req.body.shopid,
            qty: req.body.qty,
            description: req.body.description
        }
        const query1 = "INSERT INTO productinventory SET ?"
        await connection.query(query1, data, (err, result) => {
            if (err) {
                return res.send(err.sqlMessage)
            }
            {
                res.send(result)
            }
        })
    }
    catch (err) {
        res.send(err.sqlMessage)

    }
}

const productInventoryDelete = async (req, res) => {
   try{
    const data = req.params.productid
    const query1 = "DELETE FROM productinventory WHERE productid=?"
   await connection.query(query1, data, (err, result) => {
        if (err) {
          return  res.send(err.sqlMessage)
        } {
            res.send(result)
        }
    })}
    catch(err){
        res.send(err.sqlMessage)

    }
}

const productInventoryPut = async (req, res) => {
  try{
    const data = [
        req.params.productid,
        req.body.categoryid,
        req.body.categorycategoryid,
        req.body.productname,
        req.body.productcompany,
        req.body.shopid,
        req.body.qty,
        req.body.description
    ]
    const query1 = "UPDATE productinventory SET ? WHERE productid=?"
   await connection.query(query1, data, (err, result) => {
        if (err) {
          return  res.send(err.sqlMessage)
        }  {
            res.send(result)
        }
    })}
    catch(err){
        res.send(err.sqlMessage)

    }
}

module.exports = { productInventoryGet, productInventoryPost, productInventoryDelete, productInventoryPut }