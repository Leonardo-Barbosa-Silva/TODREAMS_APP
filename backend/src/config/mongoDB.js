const mongoose = require('mongoose')
const USER_NAME = process.env.USER_NAME
const USER_PASSWORD = encodeURIComponent(process.env.USER_PASSWORD)


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            `mongodb+srv://${USER_NAME}:${USER_PASSWORD}@todreamscluster.wt1ri7l.mongodb.net/app_dev?retryWrites=true&w=majority`
        )
        console.log(`Database MongoDB running on: ${conn.connection.host.yellow}`.grey)

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}



module.exports = connectDB;