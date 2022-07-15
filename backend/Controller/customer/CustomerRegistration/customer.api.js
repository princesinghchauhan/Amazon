const { connection } = require('../connection')


const customerregistrationget = async (req, res) => {
    try {
        const query1 = "SELECT * FROM customerregistration";

        await connection.query(query1, (err, result) => {
            if (err) {
                return res.send(err.sqlMessage)
            } {
                res.json({ "status": 200, "Response": result })
            }
        })
    } catch (err) {
        res.send(err.sqlMessage)
    }
};

const customerregistrationpost = async (req, res) => {
    try {
        const data = {
            customermobile: req.body.customermobile,
            customeremail: req.body.customeremail,
            customername: req.body.customername,
            customergender: req.body.customergender,
            customeraddress: req.body.customeraddress,
            customerstate: req.body.customerstate,
            customercity: req.body.customercity,
            customerpin: req.body.customerpin,

        }

        const query1 = "INSERT INTO customerregistration SET ? ";
        await connection.query(query1, data, (err, result) => {
            if (err) {
                return console.log(err.sqlMessage)
            } {
                res.json(result)
            }
        })
    } catch(err) {
        res.send(err.sqlMessage)
    }

};

const customerregistrationdelete = async (req, res) => {
   try{
    const id = req.params.customermobile
    const query1 = " DELETE FROM customerregistration WHERE customermobile = ? "
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

const customerregistrationput = async (req, res) => {
    try{
    const data = [req.params.customermobile, req.body.customeremail, req.body.customername, req.body.customergender, req.body.customerstate, req.body.customercity, req.body.customerpin]
   await connection.query("UPDATE customerregistration SET customeremail=?, customername=?, customergender=?, customerstate=?, customercity=?, customerpin=? WHERE customermobile=?", data, (err, result, field) => {
        if (err){
          return  res.send(err.sqlMessage);
         } {
            res.json({ status: 200, Response: result });
         }
    })
}catch(err){
    res.send(err.sqlMessage)
}
};

module.exports = { customerregistrationget, customerregistrationpost, customerregistrationdelete, customerregistrationput }