const { connection } = require('../../../connection')


const addtowistlistGet = async (req, res) => {
    try {
        const query1 = "SELECT * FROM addtowistlist"
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

const addtowistlistPost = async (req, res) => {
    try {
        const data = {
            productid: req.body.productid,
            customermobile: req.body.customermobile,
            qty: req.body.qty,
            price: req.body.price,
            addedondate: req.body.addedondate
        }
        const query1 = "INSERT INTO addtowistlist SET ?"
        await connection.query(query1, data, (err, result) => {
            if (err) {
                return res.send(err.sqlMessage)
            }
            res.send(result)
        })
    }
    catch (err) {
        res.send(err.sqlMessage)
    }
};

const addtowistlistDelete = async (req, res) => {
    try {
        const data = req.params.productid
        const query1 = "DELETE FROM addtowistlist WHERE productid =?"
        await connection.query(query1, data, (err, result) => {
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

const addtowistlistPut = async (req, res) => {
    try {
        const data = [
            req.params.productid,
            req.body.customermobile,
            req.body.qty,
            req.body.price,
            req.body.addedondate
        ]
        const query1 = "UPDATE addtowistlist SET ? WHERE productid=?"
        await connection.query(query1, data, (err, result) => {
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

module.exports = {
    addtowistlistGet,
    addtowistlistPost,
    addtowistlistDelete,
    addtowistlistPut
}