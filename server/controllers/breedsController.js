const db = require('../config/database')

exports.getBreeds = (req, res) => {
    db.query(`SELECT * FROM breeds`, (err, dbRes) =>{
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

