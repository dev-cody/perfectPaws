const db = require('../config/database')

exports.getCustomers = (req, res) => {
    const sqlGet = 'SELECT * FROM customers'
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

exports.addCustomer = (req, res) => {
    const customer = req.body.customer
    const sqlInsert = "INSERT INTO customers (customers) VALUES (?)"
    db.query(sqlInsert, [customer], (err, result) => {
        if(!err) {
            res.status(200).json({
                status: 'Insert Completed',
                message: `${customer} was added to the database`
            })
        } else {
            res.status(404).json({
                staus: 'Insert failed',
                message: `${customer} was not added to the database. ${err}`
            })
        }
    })
}

exports.deleteCustomer = (req, res) => {
    const customer = req.body.customer
    const sqlDelete = "DELETE FROM customers WHERE customers = ?"
    db.query(sqlDelete, [customer], (err, result) => {
        if(!err) {
            res.status(201).json({
                status: 'customer delete',
                message: `${customer} was removed from the database`
            }) 
        } else {
            res.status(404).json({
                status: 'Could not delete customer',
                message: `${customer} was not removed from the database. ${err}`
            })
        }
    })
}

exports.updateCustomer = (req, res) => {
    const customer = req.body.customer
    const customerUpdate = req.body.customerUpdate
    console.log(customer, customerUpdate)
    const sqlUpdate = "UPDATE customers SET customers = ? WHERE customers = ?"
    db.query(sqlUpdate, [customerUpdate, customer], (err, result) => {
        if(!err) {
            console.log(result)
            res.status(201).json({
                status: 'customer updated',
                message: `${customer} was updated to ${customerUpdate}. ${result.message}`
            }) 
        } else {
            res.status(404).json({
                status: 'Could not update customer',
                message: `${customer} was not updated in the database. ${err}`
            })
        }
    })
}
