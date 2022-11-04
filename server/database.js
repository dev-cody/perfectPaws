const { createPool } = require('mysql')

const pool = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    connectionLimit: 10
})

module.exports = pool
