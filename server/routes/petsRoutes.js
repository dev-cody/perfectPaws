const express = require('express')
const petsController = require('../controllers/petsController')
const router = express.Router()

router.route('/')
    .get(petsController.getPets)

module.exports = router