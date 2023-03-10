require('dotenv').config()
require('colors')
const express = require('express')
const app = express()
const portNumber = process.env.PORT || 5000
const db = require('./config/mongoDB')()
const routes = require('./routes/indexRoutes')


// Express Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ToDream's App routes
app.use('/todreams', routes)




// Server running
app.listen(portNumber, () => {
    console.log(`Server running on port: ${portNumber.blue}`.gray)
})