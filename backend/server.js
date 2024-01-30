require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')


//express app
const app = express()

//workouts router
const workoutRoutes = require('./routes/workout')
const userRoutes = require('./routes/user')

//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})


//connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(" connected to DB & listening on port ", process.env.PORT);
        })
    })
    .catch((error) => console.log(error));


// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)