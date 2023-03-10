const goalsModel = require('../../models/goal/goalsModel')


module.exports = {

    //@desc Get goals
    //@route GET v1/api/goals/my
    //@acess Private
    getMyGoals: async (req, res) => {
        try {
            // Check user
            const user = req.user

            if (!user) {
                return res.status(401).json({ message: 'User not logged' })
            }

            const goals = await goalsModel.find({
                user: user._id
            })

            return res.status(201).json({
                message: 'Successfully update goal',
                item: goals
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json( { error: 'ToDreams internal error' })
        }
    },

    //@desc Create goal
    //@route POST v1/api/goals/create
    //@acess Private
    setGoal: async (req, res) => {
        try {
            // Check user
            const user = req.user

            if (!user) {
                return res.status(401).json({ message: 'User not logged' })
            }

            const goalText = req.body.text

            if (!goalText) {
                return res.status(400).json( { message: 'Please add some text value' })
            }

            const goalCreated = await goalsModel.create({
                user: user._id,
                text
            })

            return res.status(201).json({
                message: 'Successfully created a goal',
                item: goalCreated
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json( { error: 'ToDreams internal error' })
        }
    },

    //@desc Update goal
    //@route PUT v1/api/goals/:id
    //@acess Private
    updateGoal: async (req, res) => {
        try {
            // Check user
            const user = req.user

            if (!user) {
                return res.status(401).json({ message: 'User not logged' })
            }

            const goal = await goalsModel.findById(req.params.id)

            if (!goal) {
                return res.status(400).json({ message: 'Goal not found' })
            }

            const goalUpdated = await goalsModel.findByIdAndUpdate(req.params.id, {
                text: req.body.text
            }, {
                new: true
            })

            return res.status(201).json({
                message: 'Successfully update goal',
                item: goalUpdated
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json( { error: 'ToDreams internal error' })
        }
    },

    //@desc Delete goal
    //@route DELETE /v1/api/goals/:id
    //@acess Private
    deleteGoal: async (req, res) => {
        try {
            // Check user
            const user = req.user

            if (!user) {
                return res.status(401).json({ message: 'User not logged' })
            }

            const goal = await goalsModel.findById(req.params.id)

            if (!goal) {
                return res.status(400).json({ message: 'Goal not found' })
            }

            const goalDeleted = await goalsModel.findByIdAndDelete(req.params.id)

            return res.status(201).json({
                message: 'Successfully deleted goal',
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json( { error: 'ToDreams internal error' })
        }
    }
}