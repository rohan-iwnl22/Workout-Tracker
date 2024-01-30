const express = require('express')

const router = express.Router()

//controller functions
const {loginUser, signupUser } = require('../Controller/userController')

//login route
router.post('/login', loginUser)

//signUp route
router.post('/signup', signupUser)


module.exports = router