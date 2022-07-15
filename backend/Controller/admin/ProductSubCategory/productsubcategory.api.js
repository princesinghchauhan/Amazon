const { connection } = require('../../../connection')


const productSubcategoryGet = async (req, res) => {
    try {
        const query1 = "SELECT * FROM productsubcategory"
        await connection.query(query1, (err, result) => {
            if (err) {
                return res.send(err.sqlMessage)
            }
            res.send(result)

        })
    } catch (err) {
        res.send(err.sqlMessage)
    }
}

const productSubcategoryPost = async (req, res) => {
    try {
        const data = {
            categorycategoryid: req.body.categorycategoryid,
            categoryid: req.body.categoryid,
            categorycategoryname: req.body.categorycategoryname
        }
        const query1 = "INSERT INTO productsubcategory SET ?"
        await connection.query(query1, data, (err, result) => {
            if (err) {
                return res.send(err.sqlMessage)
            }

            res.send(result)

        })
    } catch (err) {
        res.send(err.sqlMessage)
    }
}

const productSubcategoryDelete = async (req, res) => {
    try {
        const data = req.params.categorycategoryid
        const query1 = "DELETE FROM productsubcategory WHERE categorycategoryid  =?"
        await connection.query(query1, data, (err, result) => {
            if (err) {
                return res.send(err.sqlMessage)
            }
            res.send(result)

        })
    } catch (err) {
        res.send(err.sqlMessage)
    }
}

const productSubcategoryPut = async (req, res) => {
    try {
        const data = [
            req.params.categorycategoryid,
            req.body.categoryid,
            req.body.categorycategoryname
        ]
        const query1 = "UPDATE productsubcategory SET ? WHERE categorycategoryid  =?"
        await connection.query(query1, data, (err, result) => {
            if (err) {
                return res.send(err.sqlMessage)
            }
            res.send(result)

        })
    } catch (err) {
        res.send(err.sqlMessage)
    }
}

module.exports = { productSubcategoryGet, productSubcategoryPost, productSubcategoryDelete, productSubcategoryPut }