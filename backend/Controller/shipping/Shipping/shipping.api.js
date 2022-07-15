const { connection } = require('../connection')

const shippingGet = async (req, res) => {
    try {
        const query1 = "SELECT * FROM shipping";
        await connection.query(query1, (err, result) => {
            if (err) {
                return res.send(err.sqlMessage)
            }
            res.json({ "status": 200, "Response": result })

        })
    } catch (err) {
        res.send(err.sqlMessage)
    }
};

const shippingPost = async (req, res) => {
    try {
        const data = {
            shippingid: req.body.shippingid,
            invoice: req.body.invoice,
            customermobile: req.body.customermobile,
            shipdate: req.body.shipdate,
            deliverydate: req.body.deliverydate,
            status: req.body.status

        }

        const query1 = "INSERT INTO shipping SET ? ";
        await connection.query(query1, data, (err, result) => {
            if (err) {
                return console.log(err.sqlMessage)
            }
            res.json(result)

        })
    } catch (err) {
        res.send(err.sqlMessage)
    }
};

const shippingDelete = async (req, res) => {
    try {
        const id = req.params.shippingid
        const query1 = " DELETE FROM shipping WHERE shippingid  = ? "
        await connection.query(query1, id, (err, result) => {
            if (err) {
                return res.send(err.sqlMessage)
            }
            res.json({ status: 200, Response: result })

        })
    } catch (err) {
        res.send(err.sqlMessage)
    }
};

const shippingPut = async (req, res) => {
    try {
        const data = [
            req.params.shippingid,
            req.body.invoice,
            req.body.customermobile,
            req.body.shipdate,
            req.body.deliverydate,
            req.body.deliverydate
        ]
        await connection.query("UPDATE shipping SET ? WHERE shippingid =?", data, (err, result) => {
            if (err) {
                return res.send(err.sqlMessage);
            }
            res.json({ status: 200, Response: result });
        })
    } catch (err) {
        res.send(err.sqlMessage)
    }
};



module.exports = { shippingGet, shippingPost, shippingDelete, shippingPut };