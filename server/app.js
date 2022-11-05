const express = require('express')
const bodyParser = require('body-parser')

//route imports
const colorsRouter = require('./routes/colorsRoutes')

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

//routes
//TODO Create more routes
app.use('/api/v1/colors', colorsRouter)


app.listen(5050, () => {
    console.log(`Server is running on port 5050`)
})