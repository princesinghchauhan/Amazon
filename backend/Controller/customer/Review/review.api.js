const { connection } = require('../connection')


const reviewGet = async (req, res) => {
    try {
        const query1 = "SELECT * FROM review"
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

const reviewPost = async (req, res) => {
    try {
        const data = {
            customermobile: req.body.customermobile,
            rating: req.body.rating,
            message: req.body.message,
            datetime: req.body.datetime
        }
        const query1 = "INSERT INTO review SET ?"
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

const reviewDelete = async (req, res) => {
    try {
        const data = req.params.customermobile
        const query1 = "DELETE FROM review WHERE customermobile =?"
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

const reviewPut = async (req, res) => {
    try {
        const data = [
            req.params.customermobile,
            req.body.rating,
            req.body.message,
            req.body.datetime
        ]
        const query1 = "UPDATE review SET ? WHERE customermobile =?"
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

module.exports = { reviewGet, reviewPost, reviewDelete, reviewPut }