const db = require('../config/database')

exports.getBreeds = (req, res) => {
    const sqlGet = 'SELECT * FROM breeds'
    db.query (sqlGet, (err, result) =>{
        if(!err) {
            res.status(201).json({
                status: 'Sucess',
                message: result
            })
        } else {
            res.status(404).json({
                status: 'Could not get breeds',
                message: err
            })
        }
    })
}

exports.addbreed = (req, res) => {
    const breed = req.body.breed
    const sqlInsert = "INSERT INTO breeds (breeds) VALUES (?)"
    db.query(sqlInsert, [breed], (err, result) => {
        if(!err) {
            res.status(200).json({
                status: 'Insert Completed',
                message: `${breed} was added to the database`
            })
        } else {
            res.status(404).json({
                staus: 'Insert failed',
                message: `${breed} was not added to the database. ${err}`
            })
        }
    })
}

exports.deletebreed = (req, res) => {
    const breed = req.body.breed
    const sqlDelete = "DELETE FROM breeds WHERE breeds = ?"
    db.query(sqlDelete, [breed], (err, result) => {
        if(!err) {
            res.status(201).json({
                status: 'breed delete',
                message: `${breed} was removed from the database`
            }) 
        } else {
            res.status(404).json({
                status: 'Could not delete breed',
                message: `${breed} was not removed from the database. ${err}`
            })
        }
    })
}

exports.updatebreed = (req, res) => {
    const breed = req.body.breed
    const breedUpdate = req.body.breedUpdate
    console.log(breed, breedUpdate)
    const sqlUpdate = "UPDATE breeds SET breeds = ? WHERE breeds = ?"
    db.query(sqlUpdate, [breedUpdate, breed], (err, result) => {
        if(!err) {
            console.log(result)
            res.status(201).json({
                status: 'breed updated',
                message: `${breed} was updated to ${breedUpdate}. ${result.message}`
            }) 
        } else {
            res.status(404).json({
                status: 'Could not update breed',
                message: `${breed} was not updated in the database. ${err}`
            })
        }
    })
}

