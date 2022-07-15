// const { consumers } = require('stream')
const { connection } = require('../connection')

const paymentGet = async (req, res) => {
    try {
        const query1 = "SELECT * FROM makepayment"
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

const paymentPost = async (req, res) => {
    try {
        const data = {
            invoice: req.body.invoice,
            cartid: req.body.cartid,
            transectionid: req.body.transectionid,
            date: req.body.date,
            time: req.body.time,
            amount: req.body.amount,
            offerid: req.body.offerid,
            tax: req.body.tax,
            paymentmode: req.body.paymentmode,
            status: req.body.status
        }
        const query1 = "INSERT INTO makepayment SET ?"
        await connection.query(query1, data, (err, result) => {
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

const paymentDelete = async (req, res) => {
    try {
        const data = req.params.invoice
        const query1 = "DELETE FROM makepayment WHERE invoice=?"
        await connection.query(query1, data, (err, result) => {
            if (err) {
                return res.send(err.sqlMessage)
            } {
                res.send(result)
            }

        }
        )
    } catch (err) {
        res.send(err.sqlMessage)
    }

}

const paymentPut = async (req, res) => {
    try {
        const data = [
            req.params.invoice,
            req.body.cartid,
            req.body.transectionid,
            req.body.date,
            req.body.time,
            req.body.amount,
            req.body.offerid,
            req.body.tax,
            req.body.paymentmode,
            req.body.status
        ]
        const query1 = "UPDATE makepayment SET ? WHERE invoice=?"
        await connection.query(query1, data, (err, result) => {
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

module.exports = { paymentGet, paymentPost, paymentDelete, paymentPut }