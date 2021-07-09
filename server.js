const express = require('express')
const mysql = require('mysql2')
const PORT = 3002;
const app = express();
const db = mysql.createConnection ({
    host:'local host',
    user : 'root',
    password: '',
    database: 'employee'
},
console.log("databse started and connected")
)

//express middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.listen(PORT, () => {
    console.log(`server started on ${PORT}`)
} )

module.exports = db;