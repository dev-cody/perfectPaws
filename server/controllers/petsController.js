const db = require('../config/database')

exports.getPets = (req, res) => {
    const sqlGet = `SELECT breeds.breeds, petsName, colors.colors, images.imageDIR
    FROM pets
    INNER JOIN breeds ON pets.breeds_ID = breeds.breedsID
    INNER JOIN colors ON pets.color_ID = colors.colorsID
    INNER JOIN images ON pets.petImage_ID = images.imageID`
    db.query (sqlGet, (err, result) =>{
        if(!err) {
            res.status(201).json({
                status: 'Sucess',
                message: result
            })
        } else {
            res.status(404).json({
                status: 'Could not get customers',
                message: err
            })
        }
    })
}