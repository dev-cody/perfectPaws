const express = require('express')
const colorsController = require('../controllers/colorsController')
const router = express.Router()

router.route('/')
    .get(colorsController.getColors)
    .post(colorsController.addColor)
    .delete(colorsController.deleteColor)
    .patch(colorsController.updateColor)

module.exports = router