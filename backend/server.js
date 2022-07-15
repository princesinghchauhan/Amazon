
// var app = require('./ProductCategory/api');
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(express.json())
app.use(cors())

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'amazon'

})

connection.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Connected")
    }
}
)



 app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`Server started on http://localhost:${port}`)
    }
})
module.exports = {app}