const { createPool } = require('mysql')

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "tuffy243",
    connectionLimit: 10
})

module.exports = pool
