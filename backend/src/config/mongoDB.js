const mongoose = require('mongoose')
const USER_NAME = process.env.USER_NAME
const USER_PASSWORD = process.env.USER_PASSWORD


const connectDB = mongoose.connect(
    `mongodb+srv://${USER_NAME}:${USER_PASSWORD}@todreamscluster.wt1ri7l.mongodb.net/?retryWrites=true&w=majority`
)