const express = require('express')
const breedsController = require('../controllers/breedsController')
const router = express.Router()

router.route('/')
    .get(breedsController.getBreeds)
    .post(breedsController.addbreed)
    .delete(breedsController.deletebreed)
    .patch(breedsController.updatebreed)

module.exports = router

