import express from 'express'
import logger from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'

// import routes
import discordRouter from './routes/discord.router.js'

const app = express()

app.use(express.json())
// parse URL-encoded data with querystring library
app.use(express.urlencoded({ extended: false }))
app.use(logger('dev'))
app.use(cors())
app.use(helmet())
app.use(compression())

// register routes
app.use('/api/v1/discord', discordRouter)

// fallback route
app.use('*', (req, res) => {
    res.status(404).json({
        status: 'error',
    })
})

export default app