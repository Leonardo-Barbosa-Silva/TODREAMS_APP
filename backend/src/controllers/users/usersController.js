const usersModel = require('../../models/user/usersModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')



async function jwtGenerate(userID) {
    return jwt.sign({ id: userID }, process.env.JWT_SECRET)
}

module.exports = {

    // @desc Create a new user
    // @route POST v1/api/users/register
    // @acess Public
    registerUser: async (req, res) => {
        try {

            const { name, email, password } = req.body

            if (!name) {
                return res.status(400).json( { message: 'Please add a name' })
            } 
            if (!email) {
                return res.status(400).json( { message: 'Please add a email' })
            } 
            if (!password) {
                return res.status(400).json( { message: 'Please add a password' })
            }

            // Check if user already exists
            const userExists = await usersModel.findOne({ email })

            if (userExists) {
                return res.status(400).json( { message: 'User email already exists' })
            }

            const hashedPassword = await bcrypt.hash(password, 10)

            const userCreated = await usersModel.create({
                name,
                email,
                password: hashedPassword
            })

            return res.status(201).json({
                message: 'User successfully registered',
                item: {
                    _id: userCreated._id,
                    name: userCreated.name,
                    email: userCreated.email,
                    createdAt: userCreated.createdAt,
                    updatedAt: userCreated.updatedAt
                },
                userToken: await jwtGenerate(userCreated._id)
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: 'ToDreams App internal error' })
        }
    },

    // @desc Login user
    // @route POST v1/api/users/login
    // @acess Public
    loginUser: async (req, res) => {
        try {
            const { email, password } = req.body

            if (!email) {
                return res.status(400).json( { message: 'Please add a email' })
            }
            if (!password) {
                return res.status(400).json( { message: 'Please add a password' })
            }

            // Check for user email
            const user = await usersModel.findOne({ email }).select('+password')

            if (!user) {
                return res.status(400).json({ message: 'User not found' })
            }
            if (!await bcrypt.compare(password, user.password)) {
                return res.status(400).json({ message: 'Invalid user data' })
            }

            return res.status(200).json({
                message: 'Successfully login user',
                item: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt
                },
                userToken: await jwtGenerate(user._id)
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: 'ToDreams App internal error' })
        }
    },

    // @desc GET user data
    // @route GET v1/api/users/me
    // @acess Private
    getMe: async (req, res) => {
        try {
            if (!req.user._id) {
                return res.status(400).json({ message: 'User not found' })
            }

            return res.status(200).json({
                message: 'Successfully get user data',
                item: {
                    _id: req.user._id,
                    name: req.user.name,
                    email: req.user.email,
                    createdAt: req.user.createdAt,
                    updatedAt: req.user.updatedAt
                },
            })
            
        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: 'ToDreams App internal error' })
        }
    }

}