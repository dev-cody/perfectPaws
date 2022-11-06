const db = require('../config/database')

exports.getColors = (req, res) => {
    db.query(`SELECT * FROM colors`, (err, dbRes) =>{
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

exports.addColor = (req, res) => {
    const color = req.body.color
    const sqlInsert = "INSERT INTO colors (colors) VALUES (?)"
    db.query(sqlInsert, [color], (err, result) => {
        if(!err) {
            res.status(200).json({
                status: 'Insert Completed',
                message: `${color} was added to the database`
            })
        } else {
            res.status(404).json({
                staus: 'Insert failed',
                message: `${color} was not added to the database. ${err}`
            })
        }
    })
}

exports.deleteColor = (req, res) => {
    const color = req.body.color
    const sqlDelete = "DELETE FROM colors WHERE colors = ?"
    db.query(sqlDelete, [color], (err, result) => {
        if(!err) {
            res.status(201).json({
                status: 'Color delete',
                message: `${color} was removed from the database`
            }) 
        } else {
            res.status(404).json({
                status: 'Could not delete color',
                message: `${color} was not removed from the database. ${err}`
            })
        }
    })
}

exports.updateColor = (req, res) => {
    const color = req.body.color
    const colorUpdate = req.body.colorUpdate
    console.log(color, colorUpdate)
    const sqlUpdate = "UPDATE colors SET colors = ? WHERE colors = ?"
    db.query(sqlUpdate, [colorUpdate, color], (err, result) => {
        if(!err) {
            console.log(result)
            res.status(201).json({
                status: 'Color updated',
                message: `${color} was updated to ${colorUpdate}. ${result.message}`
            }) 
        } else {
            res.status(404).json({
                status: 'Could not update color',
                message: `${color} was not updated in the database. ${err}`
            })
        }
    })
}