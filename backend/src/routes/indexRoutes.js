const router = require('express').Router()
const usersRoutes = require('./goals/goalsRoutes')
const goalsRoutes = require('./user/userRoutes')


// Direct to user routes
router.use('/api/v1/users', usersRoutes)

// Direct to goals routes
router.use('/api/v1/goals', goalsRoutes)




module.exports = router;