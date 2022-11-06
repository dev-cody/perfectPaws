const express = require('express')
const customersController = require('../controllers/customerController')
const router = express.Router()

router.route('/')
    .get(customersController.getCustomers)
    .post(customersController.addCustomer)
    .delete(customersController.deleteCustomer)
    .patch(customersController.updateCustomer)

module.exports = router