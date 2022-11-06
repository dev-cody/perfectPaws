const express = require('express')
const breedsController = require('../controllers/breedsController')
const router = express.Router()

router.route('/')
    .get(breedsController.getBreeds)
    // .post(colorsController.addColor)
    // .delete(colorsController.deleteColor)
    // .patch(colorsController.updateColor)

module.exports = router