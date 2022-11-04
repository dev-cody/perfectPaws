const express = require('express')
const colorsController = require('../controllers/colorsController')
const router = express.Router()

router.route('/')
    .get(colorsController.getColors)

module.exports = router