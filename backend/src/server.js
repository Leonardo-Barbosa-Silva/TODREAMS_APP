const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const portNumber = process.env.PORT || 5000
const colors = require('colors')









app.listen(portNumber, () => {
    console.log(`Server running on port: ${portNumber}...`.gray)
})