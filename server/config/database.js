require('dotenv').config()
const mysql = require('mysql')

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    connectionLimit: 10
})

module.exports = db
