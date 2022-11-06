const express = require('express')
const bodyParser = require('body-parser')

//route imports
const colorsRouter = require('./routes/colorsRoutes')
const breedsRouter = require('./routes/breedsRoutes')

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

//routes
//TODO Create more routes
app.use('/api/v1/colors', colorsRouter)
app.use('/api/v1/breeds', breedsRouter)



app.listen(5050, () => {
    console.log(`Server is running on port 5050`)
})