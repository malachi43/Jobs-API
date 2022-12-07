require('dotenv').config();
require('express-async-errors')
const authenticateUser = require('./middlewares/authentication')
const express = require('express')
const app = express()

//errorHandlers
const errorHandlerMiddleware = require('./middlewares/errorHandler')
const notFoundMiddleware = require('./middlewares/notFound')

//security packages
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')


const PORT = process.env.PORT || 3000;
const connectDB = require('./db/connect')
const authRoute = require('./routes/auth')
const jobRoute = require('./routes/Jobs')


//parse json data coming from post route in req.body
app.use(rateLimiter({
	windowMs: 15 * 60 * 1000, 
	max: 100, 
}))
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(xss());


//routes
app.use('/api/v1/jobs', authenticateUser, jobRoute)
app.use('/api/v1/auth', authRoute)
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);



const startApp = async ()=>{
    try {
 console.log(`CONNECTING TO DATABASE...`)
    await connectDB(process.env.MONGO_URI)
    console.log(`CONNECTED TO DATABASE`)
     app.listen(PORT,console.log(`Server is listening on port ${PORT}...`))
    } catch (error) {
        console.log(error);
    }
     
}

startApp();