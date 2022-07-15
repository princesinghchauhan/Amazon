const { connection } = require('../connection')


const productget = async (req, res) => {
    try {
        const query1 = "select * from productcategory";

        await connection.query(query1, (err, result) => {
            if (err) {
                res.send(err.sqlMessage)
            } else {
                res.json({ "status": 200, "Response": result })
            }
        })
    }
    catch (err) {
        res.send(err.sqlMessage)

    }

};

const productpost = async (req, res) => {
    try {
        const data = {
            categoryid: req.body.categoryid,
            categoryname: req.body.categoryname,
        }
        const query1 = "INSERT INTO productcategory SET ?"
        await connection.query(query1, data, (err, result) => {
            if (err) {
                return res.send(err.sqlMessage)
            } {
                res.json(result)
            }
        })
    }
    catch (err) {
        res.send(err.sqlMessage)

    }
};

const productdelete = async (req, res) => {
    try {
        const id = req.params.categoryid
        const query1 = " DELETE FROM productcategory WHERE categoryid = ? "
        await connection.query(query1, id, (err, result) => {
            if (err) {
                return res.send(err.sqlMessage)
            } {
                res.json({ status: 200, Response: result })
            }
        })
    } catch (err) {
        res.send(err.sqlMessage)

    }
};

const productput = async (req, res) => {
    try {
        const data = [req.params.categoryid, req.body.categoryname]
        await connection.query("UPDATE productcategory SET  categoryname=? WHERE categoryid=?", data, (err, result) => {
            if (err) {
              return  res.send(err.sqlMessage);
            }  {
                res.json({ status: 200, Response: result });
            }
        })
    } catch (err) {
        res.send(err.sqlMessage);

    }
};

module.exports = { productget, productpost, productdelete, productput }