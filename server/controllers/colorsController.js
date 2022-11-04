const db = require('../config/database')

exports.getColors = (req, res) => {
    db.query(`SELECT * FROM pawFriends.colors`, (err, dbRes) =>{
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
}