const express = require('express')
const pool = require('./database')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    pool.query(`SELECT * FROM pawFriends.colors`, (err, dbRes) =>{
        if(!err) {
            res.json({
                message: dbRes
            })
        } else {
            res.json({
                message: err
            })
        }
    })
})

app.listen(5050, () => {
    console.log(`Server is running on port 5050`)
})