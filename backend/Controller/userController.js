const User = require('../Model/userModel')
const jwt = require('jsonwebtoken')


// function to generate token at signUP
const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '2d' })
}



//login user
const loginUser = async (req, res) => {

    const { email, password } = req.body

    try {

        const user = await User.login(email, password)

        //token creation at login
        const token = createToken(user._id)
        res.status(200).json({ email, token })

    } catch (error) {

        res.status(400).json({ error: error.message })

    }


    res.json({ mssg: 'login user' })
}

//signup user
const signupUser = async (req, res) => {

    const { email, password } = req.body
    try {

        const user = await User.signup(email, password)

        // token generation at signUP
        const token = createToken(user._id)

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })

    }
}

module.exports = { loginUser, signupUser }