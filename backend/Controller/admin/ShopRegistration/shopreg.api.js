const { connection } = require('../connection')


const shopregistrationget = async (req, res) => {
    try {
        const query1 = "SELECT * FROM shopregistration";
        await connection.query(query1, (err, result) => {
            if (err) {
                return res.send(err.sqlMessage)
            }
            res.json({ "status": 200, "Response": result })
        })
    }
    catch (err) {
        res.send(err.sqlMessage)
    }
};

const shopregistrationpost = async (req, res) => {
    try {
        const data = {
            registrationnumber: req.body.registrationnumber,
            shopid: req.body.shopid,
            shopname: req.body.shopname,
            address: req.body.address,
            state: req.body.state,
            city: req.body.city,
            pin: req.body.pin,
            contact: req.body.contact,
            ownername: req.body.ownername,
            type: req.body.type,
            email: req.body.email,
            url: req.body.url,
            turn_over: req.body.turn_over,
            gstnumber: req.body.gstnumber,
            description: req.body.description,
            termandcondition: req.body.termandcondition,
            status: req.body.status,
        }

        const query1 = "INSERT INTO shopregistration SET ? ";
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

const shopregistrationdelete = async (req, res) => {
    try {
        const id = req.params.registrationnumber
        const query1 = " DELETE FROM shopregistration WHERE registrationnumber = ? "
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

const shopregistrationput = async (req, res) => {
    try {
        const data = [req.params.registrationnumber, req.body.shopid, req.body.shopname, req.body.address, req.body.state, req.body.city, req.body.pin, req.body.contact, req.body.ownername, req.body.type, req.body.email, req.body.url, req.body.turn_over, req.body.gstnumber, req.body.description, req.body.termandcondition,
        req.body.status]
        await connection.query("UPDATE shopregistration SET shopid=?, shopname=?, address=?, state=?, city=?, pin=?, contact=?, ownername=?, type=?, email=?, url=?, turn_over=?, gstnumber=?, description=?, termandcondition=?, status=? WHERE registrationnumber=?", data, (err, result, field) => {
            if (err){
              return  res.send(err.sqlMessage);
            }
                res.json({ status: 200, Response: result });
        })
    } catch (err) {
        res.send(err.sqlMessage)
    }
};

module.exports = { shopregistrationget, shopregistrationpost, shopregistrationdelete, shopregistrationput }