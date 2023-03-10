const router = require('express').Router()
const authUserToken = require('../../middlewares/authUserToken')
const { getMyGoals, setGoal, updateGoal, deleteGoal } = require('../../controllers/goals/goalsController')


router.get('/my', authUserToken, getMyGoals)
router.post('/create', authUserToken, setGoal)
router.put('/:id', authUserToken, updateGoal)
router.delete('/:id', authUserToken, deleteGoal)



module.exports = router;