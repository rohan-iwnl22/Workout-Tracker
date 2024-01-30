const express = require('express')
const Workout = require('../Model/workoutModel')
const router = express.Router()

const { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout } = require('../Controller/workoutController')
const requireAuth = require('../middleware/requireAuth')

// require auth for all routes
router.use(requireAuth)

// GET all workout
router.get('/', getWorkouts)

// POST a new workout
router.post('/', createWorkout)

// GET a single workout 
router.get('/:id', getWorkout)

// DELETE a single workout
router.delete('/:id', deleteWorkout)

// UPDATE a single workout
router.patch('/:id', updateWorkout)

module.exports = router