const { connection } = require('../connection')

const offersGet = async (req, res) => {
    try {
        const query1 = "SELECT * FROM offers"
        await connection.query(query1, (err, result) => {
            if (err) {
                return res.send(err.sqlMessage)
            } {
                res.send(result)
            }
        })
    } catch (err) {
        res.send(err.sqlMessage)

    }
}


const offersPost = async (req, res) => {
    try {
        const data = {
            offerid: req.body.offerid,
            couponcode: req.body.couponcode,
            fromdate: req.body.fromdate,
            todate: req.body.todate,
            flatdiscount: req.body.flatdiscount,
            validin: req.body.validin,
            bankoffer: req.body.bankoffer,
        }
        const query1 = "INSERT INTO offers SET ?"
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

const offersDelete = async (req, res) => {
    try {
        const data = req.params.offerid
        const query1 = "DELETE FROM offers WHERE offerid=?"
        await connection.query(query1, data, (err, result) => {
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

const offersPut = async (req, res) => {
    try {
        const data = [
            req.params.offerid,
            req.body.couponcode,
            req.body.fromdate,
            req.body.todate,
            req.body.flatdiscount,
            req.body.validin,
            req.body.bankoffer
        ]
        const query1 = "UPDATE offers SET ? WHERE offerid=?"
        await connection.query(query1, data, (err, result) => {
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

module.exports = { offersGet, offersPost, offersDelete, offersPut }