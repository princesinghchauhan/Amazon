const { connection } = require('../connection')


const productSpecificationGet = async (req, res) => {
    try {
        const query1 = "SELECT * FROM productspecification"
        await connection.query(query1, (err, result) => {
            if (err) {
                return res.send(err.sqlMessage)
            }
            res.send(result)

        })
    }
    catch (err) {
        res.send(err.sqlMessage)

    }
}

const productSpecificationPost = async (req, res) => {
    try {
        const data = {
            productspecificationid: req.body.productspecificationid,
            productid: req.body.productid,
            height: req.body.height,
            width: req.body.width,
            size: req.body.size,
            color: req.body.color,
            price: req.body.price,
            expdate: req.body.expdate,
            manufacturedate: req.body.manufacturedate,
            weight: req.body.weight,
            productphoto: req.body.productphoto
        }
        const query1 = "INSERT INTO productspecification SET ?"
        await connection.query(query1, data, (err, result) => {
            if (err) {
             return   res.send(err.sqlMessage)
            }
            res.send(result)
        })
    }
    catch (err) {
        res.send(err.sqlMessage)

    }
}

const productSpecificationDelete = async (req, res) => {
   try{
    const data = req.params.productspecificationid
    const query1 = "DELETE FROM productspecification WHERE productspecificationid =?"
  await  connection.query(query1, data, (err, result) => {
        if (err) {
          return  res.send(err.sqlMessage)
        } 
            res.send(result)
        
    })}
    catch(err){
        res.send(err.sqlMessage)

    }
}

const productSpecificationPut = async (req, res) => {
   try{
    const data = [
        req.params.productspecificationid,
        req.body.productid,
        req.body.height,
        req.body.width,
        req.body.size,
        req.body.color,
        req.body.price,
        req.body.expdate,
        req.body.manufacturedate,
        req.body.weight,
        req.body.productphoto
    ]
    const query1 = "UPDATE productspecification SET ? WHERE productspecificationid =?"
  await  connection.query(query1, data, (err, result) => {
        if (err) {
            res.send(err.sqlMessage)
        } 
            res.send(result)
        
    })}
    catch(err){
        res.send(err.sqlMessage)
    }
}

module.exports = { productSpecificationGet, productSpecificationPost, productSpecificationDelete, productSpecificationPut }