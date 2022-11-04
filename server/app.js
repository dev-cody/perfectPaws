const express = require('express')

//route imports
const colorsRouter = require('./routes/colorsRoutes')

const app = express()
app.use(express.json())

//routes
//TODO Create more routes
app.use('/api/v1/colors', colorsRouter)


app.listen(5050, () => {
    console.log(`Server is running on port 5050`)
})