const router = require('express').Router()
const authUserToken = require('../../middlewares/authUserToken')
const { registerUser, loginUser, getMe } = require('../../controllers/users/usersController')


router.get('/me', authUserToken, getMe)
router.post('/register', registerUser)
router.post('/login', loginUser)



module.exports = router;